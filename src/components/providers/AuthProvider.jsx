import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.config';

export const DataProvider = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);


    const emailSignUp = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })

        return () => unsubscribe();
    },[])

    const data = {
        user,
        loader,
        emailSignUp,
        logOut,
    };
    return (
        <DataProvider.Provider value={data}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;

