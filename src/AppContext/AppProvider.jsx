import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const createAccount = (email, password, userName, imageUrl) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      updateProfile(auth.currentUser,{
        displayName: userName,
        photoURL: imageUrl
      })
      .then(user=>{
        console.log(result.user);
      })
    })
    .catch(error=> console.log(error.message))
  }

  const logIn = (email, password) =>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      setUser(result.user);
      console.log(result.user);
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  const logOut = ()=>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{
      alert('log out sucessfully')
      setUser(null)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const appInfo = {
    createAccount,
    user,
    isLoading,
    logIn,
    logOut
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user);
        setIsLoading(false);
      }else{
        setIsLoading(false);
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[user])

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
