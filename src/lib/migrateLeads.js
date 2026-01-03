// Migration script to sync local leads to Firebase
import { saveLead, savePackageSubmission } from './firebase.js';

export async function migrateLocalLeadsToFirebase() {
  try {
    console.log('Starting migration of local leads to Firebase...');
    
    // Get all local leads
    const localLeads = JSON.parse(localStorage.getItem('hijamaLeads') || '[]');
    console.log(`Found ${localLeads.length} local leads to migrate`);
    
    if (localLeads.length === 0) {
      console.log('No local leads found to migrate');
      return { total: 0, migrated: 0, errors: 0 };
    }
    
    // Migrate each lead to Firebase
    let migratedCount = 0;
    let errorCount = 0;
    
    for (const lead of localLeads) {
      try {
        // Check if lead already has Firebase ID (to avoid duplicates)
        if (!lead.firebaseId) {
          console.log('Migrating lead:', lead.name, lead.email);
          
          // Save to Firebase
          const firebaseId = await saveLead(lead);
          console.log('Lead migrated successfully with ID:', firebaseId);
          
          // Mark as migrated
          lead.firebaseId = firebaseId;
          migratedCount++;
        } else {
          console.log('Lead already migrated:', lead.name);
        }
      } catch (error) {
        console.error('Error migrating lead:', lead.name, error);
        errorCount++;
      }
    }
    
    // Update localStorage with Firebase IDs
    localStorage.setItem('hijamaLeads', JSON.stringify(localLeads));
    
    console.log(`Migration completed: ${migratedCount} migrated, ${errorCount} errors`);
    
    return {
      total: localLeads.length,
      migrated: migratedCount,
      errors: errorCount
    };
    
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}

export async function migrateLocalPackageSubmissionsToFirebase() {
  try {
    console.log('Starting migration of local package submissions to Firebase...');
    
    // Get all local package submissions
    const localSubmissions = JSON.parse(localStorage.getItem('bookingLeads') || '[]');
    console.log(`Found ${localSubmissions.length} local package submissions to migrate`);
    
    if (localSubmissions.length === 0) {
      console.log('No local package submissions found to migrate');
      return { total: 0, migrated: 0, errors: 0 };
    }
    
    // Migrate each submission to Firebase
    let migratedCount = 0;
    let errorCount = 0;
    
    for (const submission of localSubmissions) {
      try {
        // Check if submission already has Firebase ID (to avoid duplicates)
        if (!submission.firebaseId) {
          console.log('Migrating package submission:', submission.name, submission.email);
          
          // Save to Firebase
          const firebaseId = await savePackageSubmission(submission);
          console.log('Package submission migrated successfully with ID:', firebaseId);
          
          // Mark as migrated
          submission.firebaseId = firebaseId;
          migratedCount++;
        } else {
          console.log('Package submission already migrated:', submission.name);
        }
      } catch (error) {
        console.error('Error migrating package submission:', submission.name, error);
        errorCount++;
      }
    }
    
    // Update localStorage with Firebase IDs
    localStorage.setItem('bookingLeads', JSON.stringify(localSubmissions));
    
    console.log(`Package submissions migration completed: ${migratedCount} migrated, ${errorCount} errors`);
    
    return {
      total: localSubmissions.length,
      migrated: migratedCount,
      errors: errorCount
    };
    
  } catch (error) {
    console.error('Package submissions migration failed:', error);
    throw error;
  }
}

// Function to check if leads exist in Firebase
export async function checkFirebaseLeads() {
  try {
    const { fetchLeads } = await import('./firebase.js');
    const firebaseLeads = await fetchLeads();
    console.log(`Found ${firebaseLeads.length} leads in Firebase`);
    return firebaseLeads;
  } catch (error) {
    console.error('Error checking Firebase leads:', error);
    return [];
  }
}
