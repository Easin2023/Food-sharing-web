import { useQuery } from "@tanstack/react-query";
import AvailableFoodsCards from "../AvailableFoodsCards/AvailableFoodsCards";

const Available_Foods = () => {
     
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["addedFoodDataFindToExpiredDate"],
    queryFn: async () => {
      const data = fetch(
        "https://food-sharing-server-blond.vercel.app/addedFoodDataFindToExpiredDate"
      );
      return (await data).json();
    },
  });
  if(isLoading === true){
     return <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots loading-lg"></span>
     </div>
  }
  console.log(data)

  return (
    <div>
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Available Foods</span>
      </h1>

     <div className="grid grid-cols-3 gap-8 my-20">
          {
               data.map(da => <AvailableFoodsCards key={da._id} availableFood={da}></AvailableFoodsCards>)
          }
     </div>

    </div>
  );
};

export default Available_Foods;
