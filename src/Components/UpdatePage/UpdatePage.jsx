import { Image } from "@nextui-org/react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const UpdatePage = () => {
     useEffect(() => {
          AOS.init();
        }, []);
  const Loader = useLoaderData();

  const HandleUpdateData = (e) => {
    e.preventDefault();
    const form = e.target;
    const FoodName = form.FoodName.value;
    const ExpiredDate = form.ExpiredDate.value;
    const FoodImage = form.FoodImage.value;
    const FoodQuantity = form.FoodQuantity.value;
    const PickupLocation = form.PickupLocation.value;
    const AdditionalNotes = form.AdditionalNotes.value;
    const updateFoodInfo = {
      FoodName,
      FoodImage,
      ExpiredDate,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
    };
    console.log(updateFoodInfo)
    axios.put('http://localhost:5000/addedFood', updateFoodInfo)
    .then(res => {
      console.log(res.data)
    //  if(res.data.insertedId){
    //       Swal.fire({
    //            title: "Thanks!",
    //            text: "Your Food Added!",
    //            icon: "success"
    //          });
    //  }
    })
    .catch(error => {
     console.log(error)
    })
  };



  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <div className=" flex gap-20 lg:flex">
        <div data-aos="fade-right" className="text-center  lg:text-left">
          <h1 className="text-4xl font-bold border-l-8 border-red-500">
            {Loader.Food_Name} <span className="text-red-500">Data update</span>
          </h1>
          <div className="mt-10">
            <Image
              className="h-96"
              isZoomed
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
          </div>
        </div>
        <div data-aos="fade-left" className="card w-full  bg-rose-400">
          <form onSubmit={HandleUpdateData} className="card-body">
            <div className="flex gap-5 ">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-white">Food Name</span>
                </label>
                <input
                  type="text"
                  placeholder=" Food Name"
                  name="FoodName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-white">
                    Food Expired Date
                  </span>
                </label>
                <input
                  type="date"
                  placeholder="Expired Date"
                  name="ExpiredDate"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Image</span>
              </label>
              <input
                type="url"
                placeholder="Food Image"
                name="FoodImage"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-white">Food Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Food Quantity"
                  name="FoodQuantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-white">Pickup Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Pickup Location"
                  name="PickupLocation"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Additional Notes</span>
              </label>
              <textarea
                className="rounded-lg"
                name="AdditionalNotes"
                id=""
                cols="5"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Update Food</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpdatePage;
