import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import toast from 'react-hot-toast';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [bookings, setBookings] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const createAccount = (email, password, userName, imageUrl) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: imageUrl
        })
          .then(userAccount => {
            toast.success('Account Created Sucessfully');
            setUser(userAccount);
          })
      })
      .catch(error => console.log(error.message))
  }

  const logIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(`Welcome back ${result.user.displayName}`)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        toast.success('log out sucessfully')
        setUser(null)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const googleRegistration = () => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)
    .then((reslut)=>{
        setUser(reslut.user);
    })
    .catch((error)=>{
      setErrorMessage(error.message)
    })
  }

  const appInfo = {
    createAccount,
    user,
    setErrorMessage,
    errorMessage,
    isLoading,
    googleRegistration,
    logIn,
    logOut,
    bookings,
    setBookings
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user])

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
