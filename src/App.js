import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import './App.css';
import { firebaseCredentials } from './keys/firebase-keys';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom'
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp(firebaseCredentials);

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section className="content">
        { user ? <ChatRoom firestore = { firestore } 
          auth = { auth } /> : <SignIn userAuth = { auth } /> }
      </section>
    </div>
  );
}

export default App;
