import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../src/Firebase/Firebase.Config';
import Spinner from '../../src/components/Spinner';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name) => {
        setLoading(false);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    };

    const logIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogIn = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    };




    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
        })
        return ()=> {
            unsubscribe();
        }
    }, []);

    
    if(!user){
        return <div className='h-[90vh] flex items-center justify-center'><Spinner/></div>
    }

    const authInfo = {user, loading, logIn, googleLogIn, signUp, updateUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;