import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';
import firebaseCredentials from './keys/firebase-keys';

firebase.initializeApp(firebaseCredentials);

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
