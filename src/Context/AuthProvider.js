import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import app from '../../src/Firebase/Firebase.Config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    };





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


    const authInfo = {user, loading, logIn, googleLogIn, signUp, updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;