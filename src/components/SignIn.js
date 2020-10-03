import React from 'react'
import firebase from 'firebase/app';

const SignIn = props => 
    <button onClick={() => props.userAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
        Sign in with Google
    </button>

export default SignIn;
