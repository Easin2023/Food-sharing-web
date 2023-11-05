import { Navigate } from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {CircularProgress} from "@nextui-org/react";

const Private = ({children, Loading}) => {

     const {user} = useContext(AuthContext)
     if(Loading){
          return <CircularProgress size="lg" aria-label="Loading..."/>
     }

      if(user){
          return children;
     }


     return <Navigate to="/login"></Navigate>
};

export default Private;