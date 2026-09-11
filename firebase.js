```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    initializeAuth,
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

const app = initializeApp(firebaseConfig);

/*
 * inMemoryPersistence significa que Firebase
 * no mantiene la sesión de autenticación
 * después de cerrar/refrescar de determinadas
 * maneras; sobre todo evita persistirla en
 * almacenamiento local del navegador.
 */
const auth = initializeAuth(app, {
    persistence: inMemoryPersistence
});

const db = getFirestore(app);

export {
    app,
    auth,
    db
};
```
