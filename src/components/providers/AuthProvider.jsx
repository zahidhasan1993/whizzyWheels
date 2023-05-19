import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';





export const DataProvider = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const data = {
        name: 'zahid'
    };
    return (
        <DataProvider.Provider value={data}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;

