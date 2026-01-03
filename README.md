Setup Firebase

1) Copy .env.example values into a new .env file and fill with your Firebase web app config (Project Settings → General → Your apps).

2) Install Firebase CLI and login:
   npm i -g firebase-tools
   firebase login --reauth

3) Create the project and set default:
   firebase projects:create hijama-website --display-name "Hijama Website"
   firebase use hijama-website

4) Initialize Firestore rules and indexes:
   firebase deploy --only firestore:rules,firestore:indexes

The app reads keys from VITE_FIREBASE_* env vars and writes to these collections:
- blog_posts (public read)
- packages/current (public read)
- leads (client write-only)
- package_submissions (client write-only)


