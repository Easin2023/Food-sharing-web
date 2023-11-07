import { useQuery } from "@tanstack/react-query";
import {MdModeEditOutline} from 'react-icons/md';
import {RiDeleteBin6Fill} from 'react-icons/ri';

const Manage_My_Foods = () => {
  const { data } = useQuery({
    queryKey: ["addedFoodData"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/addedFoodData");
      return await data.json();
    },
  });
  console.log(data);
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
                        <div className="text-sm opacity-50">Quantity {da.Food_Quantity}</div>
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
                    <button className="btn btn-square  mr-2"><RiDeleteBin6Fill  className="text-2xl"></RiDeleteBin6Fill></button>
                    <button className="btn btn-square mr-3"><MdModeEditOutline className="text-2xl"></MdModeEditOutline></button>
                    <button className="btn btn-circle ">  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
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
