// Script to create admin user in Firestore users collection
// Note: User must be created in Firebase Authentication Console first
// Run with: node tools/create-admin-user.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../.env') });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || 'AIzaSyAd8myYN1_YmtkVtaSh614X3SW-MZGlxuQ',
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || 'westend-hijama-website-f35f7.firebaseapp.com',
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || 'westend-hijama-website-f35f7',
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || 'westend-hijama-website-f35f7.firebasestorage.app',
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '822276727013',
  appId: process.env.VITE_FIREBASE_APP_ID || '1:822276727013:web:605fc5fa92a8565fb9340c',
};

const adminEmail = 'info@westendhijamaclinic.co.uk';
const adminPassword = 'Admin@westend.1';

async function createAdminUser() {
  try {
    console.log('🔧 Creating admin user in Firestore...');
    console.log('📧 Email:', adminEmail);
    console.log('🔑 Password:', adminPassword);
    console.log('\n⚠️  IMPORTANT: First create the user in Firebase Authentication Console:');
    console.log('1. Go to: https://console.firebase.google.com/');
    console.log('2. Select project: westend-hijama-website-f35f7');
    console.log('3. Go to: Authentication → Users → Add User');
    console.log('4. Email:', adminEmail);
    console.log('5. Password:', adminPassword);
    console.log('6. Click "Add User"\n');
    console.log('Then run this script again to add user info to Firestore.\n');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized');
    
    // Check if user already exists
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', adminEmail));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      const existingUser = snapshot.docs[0];
      console.log('⚠️  User already exists in Firestore with ID:', existingUser.id);
      console.log('📝 Updating user info...');
      
      await setDoc(doc(db, 'users', existingUser.id), {
        email: adminEmail,
        role: 'admin',
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      console.log('✅ User info updated in Firestore users collection');
      console.log('✅ User ID:', existingUser.id);
    } else {
      console.log('📝 Creating new user in Firestore...');
      
      const docRef = await addDoc(collection(db, 'users'), {
        email: adminEmail,
        role: 'admin',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      console.log('✅ User info saved to Firestore users collection');
      console.log('✅ User ID:', docRef.id);
    }
    
    console.log('\n✅ Admin user setup complete!');
    console.log('📧 Email:', adminEmail);
    console.log('🔑 Password:', adminPassword);
    console.log('👤 Role: admin');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    console.error('❌ Error details:', error.message);
    process.exit(1);
  }
}

createAdminUser();
