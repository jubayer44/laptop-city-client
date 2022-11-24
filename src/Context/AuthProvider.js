import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import app from '../../src/Firebase/Firebase.Config';

const auth = getAuth(app);
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> {
            unsubscribe();
        }
    }, []);


    const authInfo = {user, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;