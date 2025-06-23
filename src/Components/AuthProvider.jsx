import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { AuthContext } from './AuthContext';




export let provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

     let [loading,setLoading]=useState(true);
    let [user,setUser]=useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

     let loginWithGoogle = (provider)=>{
       
       return signInWithPopup(auth,provider)
        
    }

    let logOut = ()=>{
        return signOut(auth);
    }
     let updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    useEffect(()=>{
       let unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
           // console.log(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }

    },[])

    const userInfo = {
        createUser,
        loginUser,
        loginWithGoogle,
        logOut,
        user,
        setUser,
        loading,
        setLoading,
        updateUser

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
