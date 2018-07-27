import firebase from 'firebase'
const admin = require('firebase-admin')

const serviceAccount = require('./gscodes-bb83f-d5db6f5666cb.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const config = {
    apiKey: "AIzaSyCgUpqU0on6u09mmdDNI8f5cdXqh-E2fm8",
    authDomain: "gscodes-bb83f.firebaseapp.com",
    databaseURL: "https://gscodes-bb83f.firebaseio.com",
    projectId: "gscodes-bb83f",
    storageBucket: "gscodes-bb83f.appspot.com",
    messagingSenderId: "564516863124"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const fbauth = new firebase.auth.FacebookAuthProvider();
export const fdb = firebase.database();