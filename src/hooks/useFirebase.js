import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isPending, setIsPending] = useState(true);

  const auth = getAuth();

  // login using google
  const loginUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // setting observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //  console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsPending(false);
    });
    return () => unsubscribe();
  }, []);

  // log out function
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    loginUsingGoogle,
    user,
    setUser,
    logOut,
    isPending,
    setIsPending,
  };
};

export default useFirebase;
