import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firbase/Firebase.config";
export const AuthCountext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

const [user, setUser] = useState(null);
const [loading, setLoading]= useState(true);
// Created User With email & Password-----
const createdUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};

// SingIn With email & Password-----
const singIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
// Logout---
const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
}
const updatProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      });
}


useEffect(()=>{
   const unsubcrib = onAuthStateChanged(auth, currntUser =>{
        setUser(currntUser);
        setLoading(false);
    });
    return ()=>{
        return unsubcrib();
    }
},[])

    const authInfo = {
        user,
        loading,
        createdUser,
        singIn,
        logOut,
        updatProfile
    }
    return (
        <AuthCountext.Provider value={authInfo}>
            {children}
        </AuthCountext.Provider>
    );
};

export default AuthProvider;