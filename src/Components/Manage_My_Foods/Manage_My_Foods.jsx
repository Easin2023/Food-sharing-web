import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Manage_My_Foods = () => {
  const { user } = useContext(AuthContext);

  const { data, refetch } = useQuery({
    queryKey: ["addedFoodData"],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/addedFoodData?email=${user?.email}`
      );
      return await data.json();
    },
  });

  const handleDelete = (e) => {
    axios.delete(`http://localhost:5000/addedFoodData/${e}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount) {
        Swal.fire({
          title: "delate success!",
          text: "Your product has been delayed!",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Manage My Foods</span>
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl text-black">Food Name</th>
                <th className="text-xl text-black">Donator Name</th>
                <th className="text-xl text-black">Expired_Date_Time</th>
                <th className="text-xl text-black">operation Button</th>
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
                            src={da.Food_Image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{da.Food_Name}</div>
                        <div className="text-sm opacity-50">
                          Quantity {da.Food_Quantity}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {da.Donator_Name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Location: {da.Pickup_Location}
                    </span>
                  </td>
                  <td>{da.Expired_Date_Time}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(da._id)}
                      className="btn btn-square  mr-2"
                    >
                      <RiDeleteBin6Fill className="text-2xl"></RiDeleteBin6Fill>
                    </button>
                    <Link to={`/foodUpdate/${da._id}`}>
                      <button className="btn btn-square  mr-2">
                        <MdModeEditOutline className="text-2xl"></MdModeEditOutline>
                      </button>
                    </Link>
                    <Link to={`/My_Food_Request/:${da._id}`}>
                      <button className="btn btn-outline ">Manage</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage_My_Foods;
