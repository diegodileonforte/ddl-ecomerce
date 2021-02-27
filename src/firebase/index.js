import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDT1lUEPbgUmuNQdbwU2CGjuR3ik-A8dhw",
    authDomain: "ddl-ecommerce.firebaseapp.com",
    projectId: "ddl-ecommerce",
    storageBucket: "ddl-ecommerce.appspot.com",
    messagingSenderId: "252441096107",
    appId: "1:252441096107:web:ca1730232d10c8304eacee",
    measurementId: "G-S1S43JPWZ5"
})

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}

firebase.analytics()



/* var firebaseConfig = {
    apiKey: "AIzaSyDT1lUEPbgUmuNQdbwU2CGjuR3ik-A8dhw",
    authDomain: "ddl-ecommerce.firebaseapp.com",
    projectId: "ddl-ecommerce",
    storageBucket: "ddl-ecommerce.appspot.com",
    messagingSenderId: "252441096107",
    appId: "1:252441096107:web:ca1730232d10c8304eacee",
    measurementId: "G-S1S43JPWZ5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); */