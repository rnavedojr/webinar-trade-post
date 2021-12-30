import { createContext } from "react";
import firebase from "../firebase/firebase";

export const FirebaseContext = createContext()


export const FirebaseProvider = ({ children }) => {

  return (
    <FirebaseContext.Provider value={{
      firebase
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}