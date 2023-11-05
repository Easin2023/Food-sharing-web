import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react"
import auth from "../Firebase/Firebase";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [Loading, setLoading] = useState(true)

     const signUp = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     }
     const login = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
     }
     const logout = () => {
          return signOut(auth)
     }

     useEffect(() => {
          onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               setLoading(false)
          })
     } , [Loading])

     const authInfo = {
          Loading,
          signUp,
          logout,
          login,
          user
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;