import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider(); 

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Checking state for toggle

    const [check, setCheck] = useState(false);

    const handleCheck = event => {
        setCheck(event.target.checked);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // Goggle Authentication

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside auth state changed', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            };
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        verifyEmail,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        check,
        handleCheck,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;