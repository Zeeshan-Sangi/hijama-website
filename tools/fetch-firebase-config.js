import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const envPath = join(rootDir, '.env');

// Check if Firebase CLI is installed
function checkFirebaseCLI() {
  try {
    execSync('firebase --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Check if user is logged in to Firebase
function checkFirebaseLogin() {
  try {
    const result = execSync('firebase projects:list', { encoding: 'utf8', stdio: 'pipe' });
    return result.trim().length > 0;
  } catch {
    return false;
  }
}

// Get Firebase project list
function getFirebaseProjects() {
  try {
    const result = execSync('firebase projects:list', { encoding: 'utf8' });
    const lines = result.split('\n').filter(line => line.trim());
    return lines.slice(1).map(line => {
      const match = line.match(/^(\S+)\s+(.+)$/);
      return match ? { id: match[1], name: match[2] } : null;
    }).filter(Boolean);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return [];
  }
}

// Fetch Firebase config using Firebase CLI and web API
async function fetchFirebaseConfig(projectId) {
  try {
    // Switch to the project
    execSync(`firebase use ${projectId}`, { stdio: 'ignore' });
    
    // Get project info
    const projectInfo = execSync(`firebase projects:get ${projectId}`, { encoding: 'utf8' });
    
    console.log('\n📋 Firebase Project Info:');
    console.log(projectInfo);
    
    // Note: Firebase CLI doesn't directly provide web config
    // We need to construct it or guide user to Firebase Console
    console.log('\n⚠️  Firebase CLI cannot directly fetch web app config.');
    console.log('📝 Please follow these steps:\n');
    
    console.log('1. Open Firebase Console: https://console.firebase.google.com/');
    console.log(`2. Select project: ${projectId}`);
    console.log('3. Go to: Project Settings → General → Your apps');
    console.log('4. If no web app exists, click "Add app" → Web (</>)');
    console.log('5. Copy the config object (or individual values)\n');
    
    console.log('The config format should be:');
    console.log(`
{
  apiKey: "AIza...",
  authDomain: "${projectId}.firebaseapp.com",
  projectId: "${projectId}",
  storageBucket: "${projectId}.appspot.com",
  messagingSenderId: "...",
  appId: "..."
}
    `);
    
    return null;
  } catch (error) {
    console.error('Error fetching config:', error.message);
    return null;
  }
}

// Create/update .env file with Firebase and Stripe keys
function updateEnvFile(firebaseConfig, stripeKeys) {
  let envContent = '';
  
  // Add Stripe keys
  if (stripeKeys) {
    envContent += `# Stripe Configuration\n`;
    envContent += `VITE_STRIPE_PUBLISHABLE_KEY=${stripeKeys.publishableKey}\n`;
    envContent += `STRIPE_SECRET_KEY=${stripeKeys.secretKey}\n\n`;
  }
  
  // Add Firebase keys
  if (firebaseConfig) {
    envContent += `# Firebase Configuration\n`;
    envContent += `VITE_FIREBASE_API_KEY=${firebaseConfig.apiKey}\n`;
    envContent += `VITE_FIREBASE_AUTH_DOMAIN=${firebaseConfig.authDomain}\n`;
    envContent += `VITE_FIREBASE_PROJECT_ID=${firebaseConfig.projectId}\n`;
    envContent += `VITE_FIREBASE_STORAGE_BUCKET=${firebaseConfig.storageBucket}\n`;
    envContent += `VITE_FIREBASE_MESSAGING_SENDER_ID=${firebaseConfig.messagingSenderId}\n`;
    envContent += `VITE_FIREBASE_APP_ID=${firebaseConfig.appId}\n`;
    envContent += `VITE_ENABLE_FIREBASE=true\n`;
  }
  
  // Read existing .env if it exists
  let existingContent = '';
  if (existsSync(envPath)) {
    existingContent = readFileSync(envPath, 'utf8');
    
    // Preserve existing Stripe keys if Firebase keys are being added
    if (firebaseConfig && !existingContent.includes('VITE_STRIPE_PUBLISHABLE_KEY')) {
      const stripeSection = `
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51SOoQBFMu8bmF8wZc14ekyxDYHkHOuUfoDob7x4oAhuVU4ljnTF2uUGEXlkyuel3i6tpdAo4dEXKUG1Uz7Nl9Fyy00wtUGtxTO
STRIPE_SECRET_KEY=sk_test_51SOoQBFMu8bmF8wZO75gr9366zOMUE1OHP9fam5W0lmrXK9kwso6LEONViZwyXrJ7jRT4FR5G3arIMhVjM6kxul800VZFPcFGr
`;
      envContent = stripeSection + envContent;
    }
    
    // Preserve existing Firebase keys if Stripe keys are being added
    if (stripeKeys && !existingContent.includes('VITE_FIREBASE_API_KEY')) {
      // Keep existing Firebase keys if they exist
      const firebaseLines = existingContent.split('\n').filter(line => 
        line.startsWith('VITE_FIREBASE_') || line.startsWith('VITE_ENABLE_FIREBASE')
      );
      if (firebaseLines.length > 0) {
        envContent = envContent + '\n' + firebaseLines.join('\n');
      }
    }
  }
  
  // If no existing content and no new config, keep Stripe keys at least
  if (!envContent.trim() && existsSync(envPath)) {
    envContent = existingContent;
  }
  
  // If completely new, add Stripe keys
  if (!envContent.trim()) {
    envContent = `# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51SOoQBFMu8bmF8wZc14ekyxDYHkHOuUfoDob7x4oAhuVU4ljnTF2uUGEXlkyuel3i6tpdAo4dEXKUG1Uz7Nl9Fyy00wtUGtxTO
STRIPE_SECRET_KEY=sk_test_51SOoQBFMu8bmF8wZO75gr9366zOMUE1OHP9fam5W0lmrXK9kwso6LEONViZwyXrJ7jRT4FR5G3arIMhVjM6kxul800VZFPcFGr
`;
  }
  
  writeFileSync(envPath, envContent, 'utf8');
  console.log('\n✅ .env file updated successfully!');
}

// Interactive script
async function main() {
  console.log('🔥 Firebase Config Fetcher\n');
  
  // Check Firebase CLI
  if (!checkFirebaseCLI()) {
    console.log('❌ Firebase CLI is not installed.');
    console.log('📦 Install it with: npm i -g firebase-tools');
    process.exit(1);
  }
  
  console.log('✅ Firebase CLI is installed');
  
  // Check login
  if (!checkFirebaseLogin()) {
    console.log('\n🔐 You are not logged in to Firebase.');
    console.log('🔑 Please login with: firebase login');
    process.exit(1);
  }
  
  console.log('✅ You are logged in to Firebase\n');
  
  // Get projects
  const projects = getFirebaseProjects();
  if (projects.length === 0) {
    console.log('❌ No Firebase projects found.');
    process.exit(1);
  }
  
  console.log('📁 Available Firebase Projects:');
  projects.forEach((project, index) => {
    console.log(`   ${index + 1}. ${project.name} (${project.id})`);
  });
  
  // Use hijama-website project if it exists
  const hijamaProject = projects.find(p => p.id === 'hijama-website' || p.id.includes('hijama'));
  const selectedProject = hijamaProject || projects[0];
  
  console.log(`\n🎯 Using project: ${selectedProject.name} (${selectedProject.id})\n`);
  
  // Try to fetch config
  const config = await fetchFirebaseConfig(selectedProject.id);
  
  // Update .env with existing Stripe keys
  const stripeKeys = {
    publishableKey: 'pk_test_51SOoQBFMu8bmF8wZc14ekyxDYHkHOuUfoDob7x4oAhuVU4ljnTF2uUGEXlkyuel3i6tpdAo4dEXKUG1Uz7Nl9Fyy00wtUGtxTO',
    secretKey: 'sk_test_51SOoQBFMu8bmF8wZO75gr9366zOMUE1OHP9fam5W0lmrXK9kwso6LEONViZwyXrJ7jRT4FR5G3arIMhVjM6kxul800VZFPcFGr'
  };
  
  // If config was fetched, update .env
  if (config) {
    updateEnvFile(config, stripeKeys);
  } else {
    // At least preserve Stripe keys
    updateEnvFile(null, stripeKeys);
    console.log('\n📝 After you get Firebase config from Console, run this script again or manually add to .env file.');
  }
}

main().catch(console.error);

