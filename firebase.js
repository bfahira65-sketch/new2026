import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {

apiKey:"API_KEY",

authDomain:"PROJECT.firebaseapp.com",

projectId:"PROJECT_ID",

storageBucket:"PROJECT.appspot.com",

messagingSenderId:"123456",

appId:"APP_ID"

};

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);
