const Multer = require('multer');
const serviceAccount = require('../../firebase-credentials.json');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'jesus13th-dev.appspot.com'
})

const db = admin.firestore();
const bucket = admin.storage().bucket();
const upload = Multer({storage:Multer.memoryStorage()});

module.exports= { db, upload, bucket };