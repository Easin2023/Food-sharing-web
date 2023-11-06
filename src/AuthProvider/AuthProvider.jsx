import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react"
import auth from "../Firebase/Firebase";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [Loading, setLoading] = useState(true)
     const provider = new GoogleAuthProvider();

     const signUp = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     }
     const login = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     }
     const logout = () => {
          setLoading(true)
          return signOut(auth)
     }
     const googleLogin = () => {
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     useEffect(() => {
          const unUser= onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               setLoading(false)
          })
          return () => {
               unUser();
          }
     } , [Loading])

     const authInfo = {
          googleLogin,
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