import { Image } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Add_Food = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const HandleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const FoodName = form.FoodName.value;
    const ExpiredDate = form.ExpiredDate.value;
    const FoodImage = form.FoodImage.value;
    const FoodQuantity = form.FoodQuantity.value;
    const PickupLocation = form.PickupLocation.value;
    const AdditionalNotes = form.AdditionalNotes.value;
    const addFoodInfo = {
      FoodName,
      FoodImage,
      ExpiredDate,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
    };
    axios.post('http://localhost:5000/addedFood', addFoodInfo)
    .then(res => {
     if(res.data.insertedId){
          Swal.fire({
               title: "Thanks!",
               text: "Your Food Added!",
               icon: "success"
             });
     }
    })
    .catch(error => {
     console.log(error)
    })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex gap-20 lg:flex">
        <div data-aos="fade-right" className="text-center  lg:text-left">
          <h1 className="text-4xl font-bold border-l-8 border-red-500">
            Feast Bar <span className="text-red-500">sharing Food</span> Adding
          </h1>
          <div className="mt-10">
            <Image
              className="h-96"
              isZoomed
              src="https://images.unsplash.com/photo-1600628421055-4d30de868b8f?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBzaGFyaW5nfGVufDB8fDB8fHww"
            ></Image>
          </div>
        </div>
        <div data-aos="fade-left" className="card w-full  bg-rose-400">
          <form onSubmit={HandleAddFood} className="card-body">
            <div className="flex gap-5 ">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-white">Food Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
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
              <button className="btn btn-info">add Food</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Food;
