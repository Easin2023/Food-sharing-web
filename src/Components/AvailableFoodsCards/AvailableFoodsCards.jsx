import { Avatar } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AvailableFoodsCards = ({ availableFood }) => {
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
  } = availableFood || {};

  return (
    <div>
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{Food_Name}</h2>
          <h1>Available Food : {Food_Quantity}</h1>
          <p>Pickup Location : {Pickup_Location}</p>
          <p>Expired Dat/Time : {Expired_Date_Time}</p>
          <p>{Additional_Notes}</p>
          <hr />
        </div>
        <figure className="px-10 ">
          <img className="w-60 h-40" src={Food_Image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div>
                <Avatar showFallback src={Donator_Image} />
              </div>
              <div>
                <h1 className="font-semibold">{Donator_Name}</h1>
              </div>
            </div>
            <div>
              <div>
                <Link to={`/foodDetail/${_id}`}>
                  <button className="btn btn-square">
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodsCards;
