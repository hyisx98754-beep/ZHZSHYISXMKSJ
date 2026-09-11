
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth,
    setPersistence,
    inMemoryPersistence
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCZMb9kNwHSxSLW7kYMxtGoIrnZrTdGwN4",
    authDomain: "zhzshyisxmksj.firebaseapp.com",
    databaseURL: "https://zhzshyisxmksj-default-rtdb.firebaseio.com",
    projectId: "zhzshyisxmksj",
    storageBucket: "zhzshyisxmksj.firebasestorage.app",
    messagingSenderId: "76278934273",
    appId: "1:76278934273:web:a0d5c405bfb835b62d8900"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);


// Inicializar Authentication
const auth = getAuth(app);


// No guardar la sesión en almacenamiento persistente.
// La sesión queda solamente en memoria.
await setPersistence(
    auth,
    inMemoryPersistence
);


// Inicializar Firestore
const db = getFirestore(app);


// Exportar para index.html
export {
    app,
    auth,
    db
};

