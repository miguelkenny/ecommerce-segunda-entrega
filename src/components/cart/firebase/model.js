import firebase from '../../../database/firebase/firebase.js';

const db = firebase.firestore();

const model = db.collection('carrito');

export default model;