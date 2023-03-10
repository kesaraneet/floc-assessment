import firebase from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { cert } from "firebase-admin/app";
import config from "./config.js";

firebase.initializeApp({
  credential: cert(config.firebaseConfig),
});

export const db = getFirestore();
export { firebase };
