import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Manage_Single_Food = () => {
  const { user } = useContext(AuthContext);
  const [remainingData, setRemainingData] = useState([]);

  const result = useQuery({
    queryKey: ["request_food_show"],
    queryFn: async () => {
      const data = await fetch(
        `https://food-sharing-server-blond.vercel.app/foodRequest?email=${user.email}`
      );
      const jsonData = await data.json();
      return setRemainingData(jsonData);
    },
  });
  console.log(remainingData);

  const HandleUpdate = (e) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Do you want it delivered??",
        text: "Then click Yes Delivery or Otherwise click on Cancel!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Yes,Delivered!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Delivered success!",
            text: "Your food Delivered success.",
            icon: "success",
          });
          axios
            .put(`https://food-sharing-server-blond.vercel.app/foodRequest/${e}`, {
              status: "Delivered",
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount > 0) {
                const remaining = remainingData.filter((da) => da._id !== e);
                const updated = remainingData.find((da) => da._id === e);
                updated.status = "Delivered";
                const newDelivered = [updated, ...remaining];
                setRemainingData(newDelivered);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  console.log(remainingData);

  return (
    <div className="mb-28">
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
              {remainingData?.map((da) => (
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
                        <div className="text-sm opacity-50">Quantity</div>
                      </div>
                    </div>
                  </td>
                  <td>{da.email}</td>
                  <td>Request Time: {da.time}</td>
                  <td>
                    {da.status === "Delivered" ? (
                      <span>Delivered</span>
                    ) : (
                      <button
                        onClick={() => HandleUpdate(da._id)}
                        className="btn btn-sm"
                      >
                        Pending
                      </button>
                    )}
                  </td>
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
