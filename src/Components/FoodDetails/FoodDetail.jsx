import { useLoaderData } from "react-router-dom";

const FoodDetail = () => {

  const data = useLoaderData();
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
   } = data || {};

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
          <p  className="text-3xl">Expired Date/Time : {Expired_Date_Time}</p>
          <p  className="text-3xl">{Additional_Notes}</p>
      </div>
     </div>
  );
};

export default FoodDetail;
