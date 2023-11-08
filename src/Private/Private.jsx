import { Navigate, useLocation } from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {CircularProgress} from "@nextui-org/react";

const Private = ({children}) => {
     const {user, Loading} = useContext(AuthContext);
     const location = useLocation()
     console.log(location)

     if(Loading){
          return <div className="flex justify-center items-center h-screen">
               <CircularProgress size="lg" aria-label="Loading..."/>
          </div>
     }
      else if(user){
          return children;
     }


     return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;