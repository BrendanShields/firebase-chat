import React from 'react'
import firebase from 'firebase/app';

const SignIn = props => 
    <button onClick={() => props.userAuth.signOut()}>
        Sign Out
    </button>

export default SignIn;
