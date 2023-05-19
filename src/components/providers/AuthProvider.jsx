import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase.config';

export const DataProvider = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);


    const emailSignUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
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
    };
    return (
        <DataProvider.Provider value={data}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;

