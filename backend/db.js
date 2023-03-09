const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const config = require("./config");

// TODO: Move crendetial out
initializeApp({
  credential: cert(config.firebaseConfig),
});

const db = getFirestore();

module.exports = db;
