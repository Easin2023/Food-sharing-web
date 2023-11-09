import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const My_Food_Request = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["My_request_food"],
    queryFn: async () => {
      const data = await fetch(
        `https://food-sharing-server-blond.vercel.app/foodRequest?email=${user.email}`
      );
      return await data.json();
    },
  });

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          axios
            .delete(`https://food-sharing-server-blond.vercel.app/foodRequest/${id}`)
            .then((res) => {
              console.log(res.data);
              refetch()
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

  if(isLoading){
    return <span className="loading loading-dots loading-lg"></span>
  }

  console.log(data);
  return (
    <div className="mb-28">
      <Helmet>
    <title>My_Food_Request</title>
  </Helmet>
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Manage My Foods</span>
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl text-black">Request Diner Name</th>
                <th className="text-xl text-black">Pickup Location</th>
                <th className="text-xl text-black">Expired_Date_Time</th>
                <th className="text-xl text-black">Request Time</th>
                <th className="text-xl text-black">Status</th>
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
                        <div className="font-bold">{da.name}</div>
                        <div className="text-sm opacity-50">Quantity</div>
                      </div>
                    </div>
                  </td>
                  <td>{da.Pickup_Location}</td>
                  <td>Request Time: {da.Expired_Date_Time}</td>
                  <td>Request Time: {da.time}</td>
                  <td>
                    {da.status ? (
                      <span className="font-bold text-blue-400">
                        is delivered
                      </span>
                    ) : (
                      <button
                        onClick={() => handleDelete(da._id)}
                        className="btn btn-sm btn-error btn-outline"
                      >
                        request cancel
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

export default My_Food_Request;
