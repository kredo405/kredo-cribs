import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABvbaDnrBEGwHKYCrSkOmKM9j41yp73fk",
    authDomain: "kredo-cribs.firebaseapp.com",
    projectId: "kredo-cribs",
    storageBucket: "kredo-cribs.appspot.com",
    messagingSenderId: "268402835224",
    appId: "1:268402835224:web:fe88472217d38cb5eca86d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Provider store={store}>
            <App db={db}/>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
