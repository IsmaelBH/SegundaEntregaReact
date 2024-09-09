import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmmqSp3KOAk0ResLJksQMA_C3226o4m4c",
  authDomain: "react-coder-js-1698a.firebaseapp.com",
  projectId: "react-coder-js-1698a",
  storageBucket: "react-coder-js-1698a.appspot.com",
  messagingSenderId: "874167004427",
  appId: "1:874167004427:web:1c02e031a87a015265860e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
