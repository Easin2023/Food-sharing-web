import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Manage_Single_Food = () => {
  const { user } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["request_food_show"],
    queryFn: async () => {
      const data = await fetch(
        `https://food-sharing-server-blond.vercel.app/foodRequest?email=${user.email}`
      );
      return await data.json();
    },
  });
  console.log(data)

  return (
    <div className="my-10">
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Manage My Foods</span>
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl text-black">Request user Name</th>
                <th className="text-xl text-black">Request User email</th>
                <th className="text-xl text-black">Request Date Time</th>
                <th className="text-xl text-black">Request status</th>
                
              </tr>
            </thead>
            <tbody>
              {data?.map((da) => (
                <tr key={da._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={da.user_Image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{da.name}</div>
                        <div className="text-sm opacity-50">
                          Quantity 
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {da.email}
                  </td>
                  <td>Request Time: {da.time}</td>
                  <td><button className="btn btn-sm">Available</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage_Single_Food;
