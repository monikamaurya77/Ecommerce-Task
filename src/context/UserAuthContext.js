import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import {auth} from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider  ({ children })  {
  //create a state of user so we can acess it in all  components
  const [user, setUser] = useState();

  function createaccount(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    console.log("Email", email);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut(){
    return signOut(auth);
  }


  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  //How firebase will notify us that the user has logedin for that they provide use onAuthStateChanged function so we what to run this function only once when the components get mount so we will use useEffect

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
        unsubscribe();//cleanUp function
    }
  }, []);

  return <userAuthContext.Provider value={{user, createaccount, login, logOut, googleSignIn}}>{children}</userAuthContext.Provider>;
};

export function useUserAuth() {
  return useContext(userAuthContext);
}
