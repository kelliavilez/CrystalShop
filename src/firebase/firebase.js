/*import app from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth"; // Asegúrate de que esto esté aquí
import firebaseConfig from "./config";

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.db = app.firestore();
        this.storage = app.storage();
        this.auth = app.auth(); // Agrega esto para acceder a la autenticación
    }
}

const firebase = new Firebase();
export default firebase;
*/

// firebase.js
// firebase.js
// firebase.js
/*
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa la autenticación
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import firebaseConfig from "./config"; // Asegúrate de que la configuración de Firebase sea correcta

class Firebase {
    constructor() {
        const app = initializeApp(firebaseConfig);
        this.auth = getAuth(app); // Obtiene la instancia de autenticación
        this.db = getFirestore(app); // Obtiene la instancia de Firestore
    }
}

const firebase = new Firebase();
export default firebase;*/
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'; // Asegúrate de importar auth
import firestore from '@react-native-firebase/firestore'; // Importa Firestore

class Firebase {
    constructor() {
        // Firebase ya está inicializado con @react-native-firebase/app
        this.auth = auth; // Accede a la autenticación
        this.db = firestore(); // Accede a Firestore
    }
}

const firebaseInstance = new Firebase();
export default firebaseInstance;


