import axios from 'axios';
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const FoodDetail = () => {
  const notify = () => toast("Wow so easy!");

  const { user } = useContext(AuthContext);

  const data1 = useLoaderData();
  console.log(data1)
  const {
    _id,
    Food_Image,
    Food_Name,
    Donator_Image,
    Donator_Name,
    Food_Quantity,
    Pickup_Location,
    Expired_Date_Time,
    Additional_Notes,
  } = data1 || {};

  const HandleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const Food_Name = form.Food_Name.value;
    const Food_Image = form.Food_Image.value;
    const _id = form._id.value;
    const name = form.name.value;
    const email = form.email.value;
    const userEmail = form.userEmail.value;
    const time = form.time.value;
    const Pickup_Location = form.Pickup_Location.value;
    const ExpireDate = form.ExpireDate.value;
    const textarea = form.textarea.value;
    const Money = form.Money.value;
    const requestInfo ={
      Food_Name,
      Food_Image,
      _id,
      name,
      email,
      userEmail,
      time,
      Pickup_Location,
      ExpireDate,
      textarea,
      Money,
    };
    axios.post('http://localhost:5000/foodRequest', requestInfo)
    .then(res => {
      console.log(res.data)
      // if(res.data.insertedId){
      // }
    })
  };

  return (
    <div className="border rounded-2xl p-11 shadow-lg">
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">{Food_Name}</span>
      </h1>
      <div className="flex justify-center mt-14">
        <img className=" rounded-2xl w-[500px]" src={Food_Image} alt="" />
      </div>
      <div className="mt-8 ml-7">
        <p className="text-3xl"> Food Quantity : {Food_Quantity}</p>
        <p className="text-3xl">Expired Date/Time : {Expired_Date_Time}</p>
        <p className="text-3xl">{Additional_Notes}</p>
        <div className='mt-20'>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Food Request
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <div>
                <form onSubmit={HandleRequest}>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">Food Name</span>
                    </label>
                    <input
                      defaultValue={Food_Name}
                      type="text"
                      placeholder="email"
                      name="Food_Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">Food Image</span>
                    </label>
                    <input
                      defaultValue={Food_Image}
                      type="text"
                      placeholder="Food Image"
                      name="Food_Image"
                      className="input input-bordered"
                      required
                    />
                  </div>{" "}
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">Food Id</span>
                    </label>
                    <input
                      defaultValue={_id}
                      type="text"
                      placeholder="_id"
                      name="_id"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">
                        Donator Name
                      </span>
                    </label>
                    <input
                      defaultValue={Donator_Name}
                      type="text"
                      placeholder="_id"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">
                        Donator Email
                      </span>
                    </label>
                    <input
                      defaultValue={user?.email}
                      type="text"
                      placeholder="_id"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">User Email</span>
                    </label>
                    <input
                      defaultValue={user?.email}
                      type="text"
                      placeholder="_id"
                      name="userEmail"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">
                        Request Time
                      </span>
                    </label>
                    <input
                      type="time"
                      placeholder="_id"
                      name="time"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">
                        Pickup Location
                      </span>
                    </label>
                    <input
                      defaultValue={Pickup_Location}
                      type="text"
                      placeholder="_id"
                      name="Pickup_Location"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">Expire Date</span>
                    </label>
                    <input
                      defaultValue={Expired_Date_Time}
                      type="text"
                      placeholder="_id"
                      name="ExpireDate"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">
                        Additional Notes
                      </span>
                    </label>
                    <textarea
                      className="bg-slate-200 rounded-2xl"
                      name="textarea"
                      id=""
                      cols="10"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text ">
                        Donation Money
                      </span>
                    </label>
                    <input
                      defaultValue="$"
                      type="number"
                      placeholder="Donation Money"
                      name="Money"
                      className="input input-bordered"
                    />
                  </div>
              <div className="modal-action">
                  <button className="btn btn-primary" onClick={notify} type="submit">Request</button>
                  <ToastContainer/>
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn mr-3">Close</button>
                </form>
              </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
