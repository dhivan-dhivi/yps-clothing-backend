const admin = require('firebase-admin');
const { firebase: fbConfig } = require('./env');
if (!admin.apps.length && fbConfig?.projectId) {
    admin.initializeApp({ credential: admin.credential.applicationDefault() });
}
module.exports = { adminDb: admin.apps.length ? admin.firestore() : null };