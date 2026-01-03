import readline from 'readline';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const envPath = join(rootDir, '.env');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function checkFirebaseLogin() {
  try {
    execSync('firebase --version', { stdio: 'ignore' });
    const result = execSync('firebase projects:list', { encoding: 'utf8', stdio: 'pipe' });
    return result.trim().length > 0;
  } catch {
    return false;
  }
}

async function main() {
  console.log('⚙️  Environment Setup Helper\n');
  
  // Check Firebase login
  const isLoggedIn = await checkFirebaseLogin();
  if (isLoggedIn) {
    console.log('✅ Firebase CLI detected and you are logged in\n');
  } else {
    console.log('⚠️  Firebase CLI not detected or not logged in');
    console.log('   Run: npm i -g firebase-tools && firebase login\n');
  }
  
  // Read existing .env if it exists
  let existingEnv = {};
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          existingEnv[key] = valueParts.join('=');
        }
      }
    });
  }
  
  console.log('📝 Let\'s set up your .env file\n');
  console.log('💡 Tip: Get Firebase config from Firebase Console → Project Settings → General → Your apps\n');
  
  // Stripe Keys (with defaults)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('💳 Stripe Configuration');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const stripePublishable = await question(
    `Stripe Publishable Key [${existingEnv.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_...'}]: `
  ) || existingEnv.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51SOoQBFMu8bmF8wZc14ekyxDYHkHOuUfoDob7x4oAhuVU4ljnTF2uUGEXlkyuel3i6tpdAo4dEXKUG1Uz7Nl9Fyy00wtUGtxTO';
  
  const stripeSecret = await question(
    `Stripe Secret Key [${existingEnv.STRIPE_SECRET_KEY ? '***hidden***' : 'sk_test_...'}]: `
  ) || existingEnv.STRIPE_SECRET_KEY || 'sk_test_51SOoQBFMu8bmF8wZO75gr9366zOMUE1OHP9fam5W0lmrXK9kwso6LEONViZwyXrJ7jRT4FR5G3arIMhVjM6kxul800VZFPcFGr';
  
  // Firebase Keys
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔥 Firebase Configuration');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const firebaseApiKey = await question(
    `Firebase API Key [${existingEnv.VITE_FIREBASE_API_KEY || ''}]: `
  ) || existingEnv.VITE_FIREBASE_API_KEY || '';
  
  const firebaseAuthDomain = await question(
    `Firebase Auth Domain [${existingEnv.VITE_FIREBASE_AUTH_DOMAIN || ''}]: `
  ) || existingEnv.VITE_FIREBASE_AUTH_DOMAIN || '';
  
  const firebaseProjectId = await question(
    `Firebase Project ID [${existingEnv.VITE_FIREBASE_PROJECT_ID || 'hijama-website'}]: `
  ) || existingEnv.VITE_FIREBASE_PROJECT_ID || 'hijama-website';
  
  const firebaseStorageBucket = await question(
    `Firebase Storage Bucket [${existingEnv.VITE_FIREBASE_STORAGE_BUCKET || ''}]: `
  ) || existingEnv.VITE_FIREBASE_STORAGE_BUCKET || '';
  
  const firebaseMessagingSenderId = await question(
    `Firebase Messaging Sender ID [${existingEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || ''}]: `
  ) || existingEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || '';
  
  const firebaseAppId = await question(
    `Firebase App ID [${existingEnv.VITE_FIREBASE_APP_ID || ''}]: `
  ) || existingEnv.VITE_FIREBASE_APP_ID || '';
  
  // Create .env content
  let envContent = `# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=${stripePublishable}
STRIPE_SECRET_KEY=${stripeSecret}

# Firebase Configuration
`;
  
  if (firebaseApiKey) {
    envContent += `VITE_FIREBASE_API_KEY=${firebaseApiKey}
VITE_FIREBASE_AUTH_DOMAIN=${firebaseAuthDomain}
VITE_FIREBASE_PROJECT_ID=${firebaseProjectId}
VITE_FIREBASE_STORAGE_BUCKET=${firebaseStorageBucket}
VITE_FIREBASE_MESSAGING_SENDER_ID=${firebaseMessagingSenderId}
VITE_FIREBASE_APP_ID=${firebaseAppId}
VITE_ENABLE_FIREBASE=true
`;
  } else {
    envContent += `# Firebase keys not configured yet
# VITE_FIREBASE_API_KEY=
# VITE_FIREBASE_AUTH_DOMAIN=
# VITE_FIREBASE_PROJECT_ID=
# VITE_FIREBASE_STORAGE_BUCKET=
# VITE_FIREBASE_MESSAGING_SENDER_ID=
# VITE_FIREBASE_APP_ID=
# VITE_ENABLE_FIREBASE=true
`;
  }
  
  // Write to file
  writeFileSync(envPath, envContent, 'utf8');
  
  console.log('\n✅ .env file created successfully!');
  console.log(`📁 Location: ${envPath}\n`);
  
  if (!firebaseApiKey) {
    console.log('⚠️  Firebase keys not configured.');
    console.log('📝 Get them from: https://console.firebase.google.com/');
    console.log('   → Select your project → Project Settings → General → Your apps\n');
  }
  
  rl.close();
}

main().catch(err => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});

