import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser ] = useState(null);

    const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateInfo = (name, photoURL) =>{
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
    }

    const signIn = (email, password ) =>{
      return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
      return signOut(auth);
    }
    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        console.log('CUrrent user is', currentUser);
      })
      return ()=> unsubscribe();
    },[])

    const authInfo = { user, createUser, signIn, logOut, updateInfo };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;