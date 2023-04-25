import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const { currentUser, setCurrentUser } = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  //   sing up with google
  const singUpWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    singUpWithGoogle,
    currentUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
