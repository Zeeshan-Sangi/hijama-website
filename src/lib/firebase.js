// Lightweight Firebase bootstrap and Firestore helpers (lazy, optional)

// Firebase Configuration - with fallback values to ensure it always works
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAd8myYN1_YmtkVtaSh614X3SW-MZGlxuQ',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'westend-hijama-website-f35f7.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'westend-hijama-website-f35f7',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'westend-hijama-website-f35f7.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '822276727013',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:822276727013:web:605fc5fa92a8565fb9340c',
};

// Always enable Firebase if projectId and apiKey are available
const ENABLED = !!firebaseConfig.projectId && !!firebaseConfig.apiKey;

console.log('🔥 Firebase Config Loaded:', {
  projectId: firebaseConfig.projectId,
  apiKey: firebaseConfig.apiKey ? 'SET ✅' : 'MISSING ❌',
  enabled: ENABLED,
  fromEnv: {
    projectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID,
    apiKey: !!import.meta.env.VITE_FIREBASE_API_KEY
  }
});

let _app;
let _db;

async function ensureDb() {
  try {
    console.log('🔧 ensureDb called, ENABLED:', ENABLED);
    console.log('🔧 Firebase config check:', {
      projectId: firebaseConfig.projectId,
      apiKey: firebaseConfig.apiKey ? 'SET (' + firebaseConfig.apiKey.substring(0, 20) + '...)' : 'MISSING ❌',
      authDomain: firebaseConfig.authDomain,
      enableFirebase: import.meta.env.VITE_ENABLE_FIREBASE
    });
    
    if (!ENABLED) {
      const errorMsg = 'FIREBASE_DISABLED - Check your .env file for VITE_FIREBASE_* keys. Project ID: ' + firebaseConfig.projectId + ', API Key: ' + (firebaseConfig.apiKey ? 'SET' : 'MISSING');
      console.error('❌ Firebase is DISABLED!', errorMsg);
      throw new Error(errorMsg);
    }
    
    if (_db) {
      console.log('✅ Using existing Firebase DB connection');
      const { serverTimestamp, getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs, query, orderBy } = await import('firebase/firestore');
      return { db: _db, getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs, query, orderBy, serverTimestamp };
    }
    
    console.log('🔧 Initializing Firebase...');
  const appMod = await import('firebase/app');
  const { getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs, query, orderBy, serverTimestamp } = await import('firebase/firestore');
    
  if (!appMod.getApps || appMod.getApps().length === 0) {
      console.log('🔧 Creating new Firebase app with config:', {
        projectId: firebaseConfig.projectId,
        authDomain: firebaseConfig.authDomain
      });
    _app = appMod.initializeApp(firebaseConfig);
      console.log('✅ Firebase app initialized successfully');
  } else {
      console.log('✅ Using existing Firebase app...');
    _app = appMod.getApp();
  }
    
  _db = getFirestore(_app);
    console.log('✅ Firebase DB (Firestore) initialized successfully');
    console.log('✅ Connected to project:', firebaseConfig.projectId);
    
  // Re-export frequently used funcs per call site convenience
  return { db: _db, getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs, query, orderBy, serverTimestamp };
  } catch (error) {
    console.error('❌ ensureDb failed:', error);
    console.error('❌ Error stack:', error.stack);
    throw error;
  }
}

// Collections
const colNames = {
  leads: 'leads',
  packageSubmissions: 'package_submissions',
  blogPosts: 'blog_posts',
  packages: 'packages',
};

export async function saveLead(lead) {
  try {
    console.log('📋 saveLead called with:', lead);
    console.log('📋 Reason field in lead:', lead?.reason);
    const { db, collection, addDoc, serverTimestamp } = await ensureDb();
    console.log('📋 Firebase DB initialized, saving to leads collection...');
    
    const payload = { ...lead, createdAt: serverTimestamp() };
    console.log('📋 Payload prepared:', payload);
    console.log('📋 Reason field in payload:', payload?.reason);
    
    const docRef = await addDoc(collection(db, colNames.leads), payload);
    console.log('✅ Lead saved successfully with ID:', docRef.id);
    console.log('✅ Saved to collection: leads');
    return docRef.id;
  } catch (error) {
    console.error('❌ Error in saveLead:', error);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack:', error.stack);
    throw error;
  }
}

export async function savePackageSubmission(submission) {
  try {
    console.log('📦 savePackageSubmission called with:', submission);
    console.log('📦 Reason field in submission:', submission?.reason);
    const { db, collection, addDoc, serverTimestamp } = await ensureDb();
    console.log('📦 Firebase DB initialized, saving to package_submissions collection...');
    
    const payload = { ...submission, createdAt: serverTimestamp() };
    console.log('📦 Payload prepared:', payload);
    console.log('📦 Reason field in payload:', payload?.reason);
    
    const docRef = await addDoc(collection(db, colNames.packageSubmissions), payload);
    console.log('✅ Package submission saved successfully with ID:', docRef.id);
    console.log('✅ Saved to collection: package_submissions');
    return docRef.id;
  } catch (error) {
    console.error('❌ Error in savePackageSubmission:', error);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack:', error.stack);
    throw error;
  }
}

export async function upsertBlogPost(post) {
  try {
    console.log('📝 upsertBlogPost called for:', post.id, post.title);
    const { db, setDoc, doc, serverTimestamp } = await ensureDb();
    const id = String(post.id);
    
    const postData = {
      ...post,
      id: id, // Ensure ID is included
      updatedAt: serverTimestamp(),
    };
    
    await setDoc(doc(db, colNames.blogPosts, id), postData, { merge: true });
    console.log('✅ Blog post saved to Firebase, ID:', id);
    return id;
  } catch (error) {
    console.error('❌ Error upserting blog post:', error);
    console.error('❌ Error details:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    throw error;
  }
}

export async function fetchBlogPosts() {
  try {
    console.log('📝 ===== FETCHING BLOG POSTS =====');
    console.log('📝 Collection name:', colNames.blogPosts);
    
    const { db, collection, getDocs, query, orderBy } = await ensureDb();
    console.log('✅ Firebase DB initialized');
    
    // Try to fetch with orderBy first
    let snapshot;
    try {
      console.log('📝 Attempting fetch with orderBy...');
    const q = query(collection(db, colNames.blogPosts), orderBy('date', 'desc'));
      snapshot = await getDocs(q);
      console.log('✅ Fetched with orderBy successfully!');
      console.log('📝 Documents count:', snapshot.docs.length);
      console.log('📝 Empty:', snapshot.empty);
    } catch (orderByError) {
      // If orderBy fails (maybe no date field or index missing), fetch without orderBy
      console.warn('⚠️ orderBy failed, fetching without order');
      console.warn('⚠️ Error:', orderByError.message);
      console.warn('⚠️ Error code:', orderByError.code);
      const q = collection(db, colNames.blogPosts);
      snapshot = await getDocs(q);
      console.log('✅ Fetched without orderBy successfully!');
      console.log('📝 Documents count:', snapshot.docs.length);
      console.log('📝 Empty:', snapshot.empty);
    }
    
    if (snapshot.empty) {
      console.warn('⚠️ Snapshot is empty - no blog posts found');
      return [];
    }
    
    console.log('📝 Processing', snapshot.docs.length, 'documents...');
    const results = snapshot.docs.map((d, index) => {
      const data = d.data();
      const result = { id: d.id, ...data };
      if (index === 0) {
        console.log('📝 First document data:', result);
      }
      return result;
    });
    
    console.log('✅ ===== FETCH COMPLETE =====');
    console.log('✅ Total blog posts fetched:', results.length);
    if (results.length > 0) {
      console.log('📝 Sample post:', results[0]);
    }
    return results;
  } catch (error) {
    console.error('❌ ===== ERROR IN FETCH =====');
    console.error('❌ Error:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error stack:', error.stack);
    return [];
  }
}

export async function fetchBlogPostById(id) {
  try {
    const { db, doc, getDoc } = await ensureDb();
    const snap = await getDoc(doc(db, colNames.blogPosts, String(id)));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function savePackages(packages) {
  try {
    const { db, setDoc, doc, serverTimestamp } = await ensureDb();
    await setDoc(doc(db, colNames.packages, 'current'), { packages, updatedAt: serverTimestamp() });
  } catch (error) {
    console.error('Error saving packages:', error);
  }
}

export async function fetchPackages() {
  try {
    const { db, doc, getDoc } = await ensureDb();
    const snap = await getDoc(doc(db, colNames.packages, 'current'));
    return snap.exists() ? snap.data().packages : null;
  } catch (error) {
    console.error('Error fetching packages:', error);
    return null;
  }
}

export async function fetchLeads() {
  try {
    console.log('📋 ===== FETCHING LEADS =====');
    console.log('📋 Collection name:', colNames.leads);
    
    const { db, collection, getDocs, query, orderBy } = await ensureDb();
    console.log('✅ Firebase DB initialized');
    
    // Try to fetch with orderBy first
    let snapshot;
    try {
      console.log('📋 Attempting fetch with orderBy...');
    const q = query(collection(db, colNames.leads), orderBy('createdAt', 'desc'));
      snapshot = await getDocs(q);
      console.log('✅ Fetched with orderBy successfully!');
      console.log('📋 Documents count:', snapshot.docs.length);
      console.log('📋 Empty:', snapshot.empty);
    } catch (orderByError) {
      // If orderBy fails (maybe no createdAt field or index missing), fetch without orderBy
      console.warn('⚠️ orderBy failed, fetching without order');
      console.warn('⚠️ Error:', orderByError.message);
      console.warn('⚠️ Error code:', orderByError.code);
      const q = collection(db, colNames.leads);
      snapshot = await getDocs(q);
      console.log('✅ Fetched without orderBy successfully!');
      console.log('📋 Documents count:', snapshot.docs.length);
      console.log('📋 Empty:', snapshot.empty);
    }
    
    if (snapshot.empty) {
      console.warn('⚠️ Snapshot is empty - no documents found');
      return [];
    }
    
    console.log('📋 Processing', snapshot.docs.length, 'documents...');
    const results = snapshot.docs.map((d, index) => {
      const data = d.data();
      const result = { id: d.id, ...data };
      if (index === 0) {
        console.log('📋 First document data:', result);
        console.log('📋 First document createdAt:', data.createdAt);
      }
      return result;
    });
    
    console.log('✅ ===== FETCH COMPLETE =====');
    console.log('✅ Total leads fetched:', results.length);
    if (results.length > 0) {
      console.log('📋 Sample lead:', results[0]);
    }
    return results;
  } catch (error) {
    console.error('❌ ===== ERROR IN FETCH =====');
    console.error('❌ Error:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error stack:', error.stack);
    return [];
  }
}

// Save user to Firestore users collection
export async function saveUser(userData) {
  try {
    console.log('👤 saveUser called with:', { email: userData.email, role: userData.role });
    const { db, collection, addDoc, setDoc, doc, serverTimestamp } = await ensureDb();
    
    // Check if user already exists by email
    const { query, where, getDocs } = await import('firebase/firestore');
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', userData.email));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      // User exists, update it
      const existingUser = snapshot.docs[0];
      await setDoc(doc(db, 'users', existingUser.id), {
        ...userData,
        updatedAt: serverTimestamp()
      }, { merge: true });
      console.log('✅ User updated in users collection, ID:', existingUser.id);
      return existingUser.id;
    } else {
      // Create new user
      const docRef = await addDoc(collection(db, 'users'), {
        ...userData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ User saved to users collection, ID:', docRef.id);
      return docRef.id;
    }
  } catch (error) {
    console.error('❌ Error saving user:', error);
    throw error;
  }
}

// Fetch user by email
export async function fetchUserByEmail(email) {
  try {
    const { db, collection, query, where, getDocs } = await ensureDb();
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      const userDoc = snapshot.docs[0];
      return { id: userDoc.id, ...userDoc.data() };
    }
    return null;
  } catch (error) {
    console.error('❌ Error fetching user:', error);
    return null;
  }
}

export async function fetchPackageSubmissions() {
  try {
    console.log('📦 ===== FETCHING PACKAGE SUBMISSIONS =====');
    console.log('📦 Collection name:', colNames.packageSubmissions);
    
    const { db, collection, getDocs, query, orderBy } = await ensureDb();
    console.log('✅ Firebase DB initialized');
    console.log('📦 DB object:', db);
    
    // Try to fetch with orderBy first
    let snapshot;
    try {
      console.log('📦 Attempting fetch with orderBy...');
    const q = query(collection(db, colNames.packageSubmissions), orderBy('createdAt', 'desc'));
      snapshot = await getDocs(q);
      console.log('✅ Fetched with orderBy successfully!');
      console.log('📦 Documents count:', snapshot.docs.length);
      console.log('📦 Empty:', snapshot.empty);
    } catch (orderByError) {
      // If orderBy fails (maybe no createdAt field or index missing), fetch without orderBy
      console.warn('⚠️ orderBy failed, fetching without order');
      console.warn('⚠️ Error:', orderByError.message);
      console.warn('⚠️ Error code:', orderByError.code);
      const q = collection(db, colNames.packageSubmissions);
      snapshot = await getDocs(q);
      console.log('✅ Fetched without orderBy successfully!');
      console.log('📦 Documents count:', snapshot.docs.length);
      console.log('📦 Empty:', snapshot.empty);
    }
    
    if (snapshot.empty) {
      console.warn('⚠️ Snapshot is empty - no documents found');
      return [];
    }
    
    console.log('📦 Processing', snapshot.docs.length, 'documents...');
    const results = snapshot.docs.map((d, index) => {
      const data = d.data();
      const result = { id: d.id, ...data };
      if (index === 0) {
        console.log('📦 First document data:', result);
        console.log('📦 First document createdAt:', data.createdAt);
      }
      return result;
    });
    
    console.log('✅ ===== FETCH COMPLETE =====');
    console.log('✅ Total submissions fetched:', results.length);
    if (results.length > 0) {
      console.log('📦 Sample submission:', results[0]);
    }
    return results;
  } catch (error) {
    console.error('❌ ===== ERROR IN FETCH =====');
    console.error('❌ Error:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error stack:', error.stack);
    return [];
  }
}
