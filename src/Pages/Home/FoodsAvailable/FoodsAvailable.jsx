import { useQuery } from "@tanstack/react-query";
import {Link} from 'react-router-dom';
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Button } from "@nextui-org/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FoodsAvailable = () => {

     
     useEffect(() => {
          AOS.init();
        }, [])

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["foodData"],
    queryFn: async () => {
      const data = fetch("https://food-sharing-server-blond.vercel.app/addedFoodData");
      return (await data).json();
    },
  });

  if (isLoading === true) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <div>
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Available Foods</span>
      </h1>

      <div data-aos="fade-up" data-aos-duration="3000" className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-32">
        {data.slice(0, 6).map((foodData) => (
          <FoodCard key={foodData._id} foodCard={foodData}></FoodCard>
        ))}
      </div>
      <div className="my-40 text-center">
        <Link to="/Available_Foods">
          <Button className="bg-gradient-to-tr w-40 h-16 from-pink-500 to-yellow-500 text-white text-2xl shadow-lg">
            view All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FoodsAvailable;
