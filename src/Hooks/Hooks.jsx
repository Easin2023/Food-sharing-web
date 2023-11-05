import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useAuthContext = useContext(AuthContext);
export default useAuthContext;