import { Image } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const UpdatePage = () => {
     useEffect(() => {
          AOS.init();
        }, []);
  const Loader = useLoaderData();
  const goTo = useNavigate();

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
    axios.put(`https://food-sharing-server-blond.vercel.app/updateFoodData/${Loader._id}`, updateFoodInfo)
    .then(res => {
      console.log(res.data)
     if(res.data.modifiedCount){
          Swal.fire({
               title: "ok success!",
               text: "Your update success!",
               icon: "success"
             });
     }
     goTo('/Available_Foods')
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
              src={Loader.Food_Image}
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
                defaultValue={Loader.Food_Name}
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
                defaultValue={Loader.Expired_Date_Time}
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
              defaultValue={Loader.Food_Image}
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
                defaultValue={Loader.Food_Quantity}
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
                defaultValue={Loader.Pickup_Location}
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
