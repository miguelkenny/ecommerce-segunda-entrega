import admin from 'firebase-admin';

import serviceAccount from './data/ecommerce-e1190-firebase-adminsdk-gylfd-7dfea63a4d.js';

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount.firebase),
    databaseURL:"https://ecommerce-e1190.firebaseio.com"
});

console.log('Base Firebase Conectada');

export default admin;