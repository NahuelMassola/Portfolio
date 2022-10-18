import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import SkillContextProvider from './Components/Context/SkillContext';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEoP40qlcDGA5auyVe-eBKSkqQqiLtmBs",
  authDomain: "portfolio-b11c4.firebaseapp.com",
  projectId: "portfolio-b11c4",
  storageBucket: "portfolio-b11c4.appspot.com",
  messagingSenderId: "76758022023",
  appId: "1:76758022023:web:9319ffe0e17a57c5c30522"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SkillContextProvider>
    <App />
    </SkillContextProvider>
  </React.StrictMode>
);


reportWebVitals();
