import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';

export const DataProvider = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    const emailSignUp = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleSignUp = () => {
        return signInWithPopup(auth,googleProvider);

    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (user,name,photo) => {
        return updateProfile(user,{
            displayName : name,
            photoURL: photo
        })
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }
   


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
            console.log(currentUser);
        })

        return () => unsubscribe();
    },[])

    const data = {
        user,
        loader,
        emailSignUp,
        googleSignUp,
        signIn,
        updateUser,
        logOut,
    };
    return (
        <DataProvider.Provider value={data}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;

