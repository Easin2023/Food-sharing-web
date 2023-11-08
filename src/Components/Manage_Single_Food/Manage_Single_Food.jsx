import { useQuery } from "@tanstack/react-query";
import {useContext} from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Manage_Single_Food = () => {

     const {user} = useContext(AuthContext);

     const {data} = useQuery({
          queryKey: ["request_food_show"],
          queryFn: async () => {
               const data = await fetch(`http://localhost:5000/foodRequest?email=${user.email}`)
               return await data.json();
          }
     })

     console.log(data)

     return (
          <div>
               
          </div>
     );
};

export default Manage_Single_Food;