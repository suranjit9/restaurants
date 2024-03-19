import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firbase/Firebase.config";
import usePubLicUrl from "../Hook/PublickUrl/usePubLicUrl";
export const AuthCountext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

const [user, setUser] = useState(null);
const [loading, setLoading]= useState(true);
const googleprovider = new GoogleAuthProvider();
const axiosPublic = usePubLicUrl();

// Google Sing In -----------
const googleSingIn =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
}
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
const logOut=()=>{
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
        // Use Token For Suciur API
        
        if (currntUser) {
            const userInf = {email: currntUser.email};
            axiosPublic.post('/jwt',userInf)
            .then(res =>{
                if (res.data.token) {
                    localStorage.setItem('access_token', res.data.token)
                }
            })
        }else{
            localStorage.removeItem('access_token')
        }
        setLoading(false);

    });
    return ()=>{
        return unsubcrib();
    }
},[axiosPublic])

    const authInfo = {
        user,
        loading,
        createdUser,
        googleSingIn,
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