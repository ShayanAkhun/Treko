const admin = require('firebase-admin');

// Use your service account JSON file
const serviceAccount = require('./path/to/your-service-account-file.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const setSuperAdmin = async (uid) => {
  await admin.auth().setCustomUserClaims(uid, { role: 'super-admin' });
  console.log('Custom claims set for super admin');
};

setSuperAdmin('your-super-admin-uid'); // Replace with the actual UID of your super admin user
