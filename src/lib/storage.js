import { firebaseConfig } from '@/lib/firebase';

let storage;
async function getStorageInstance() {
  if (storage) return storage;
  const appMod = await import('firebase/app');
  const { getStorage } = await import('firebase/storage');
  let app;
  if (!appMod.getApps || appMod.getApps().length === 0) {
    app = appMod.initializeApp(firebaseConfig);
  } else {
    app = appMod.getApp();
  }
  storage = getStorage(app);
  return storage;
}

export async function uploadImageToStorage(file, pathPrefix = 'uploads') {
  const s = await getStorageInstance();
  const safeName = file.name.replace(/[^a-zA-Z0-9_.-]/g, '_');
  const objectPath = `${pathPrefix}/${Date.now()}-${safeName}`;
  const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
  const storageRef = ref(s, objectPath);
  await uploadBytes(storageRef, file, { contentType: file.type });
  const url = await getDownloadURL(storageRef);
  return { url, path: objectPath };
}


