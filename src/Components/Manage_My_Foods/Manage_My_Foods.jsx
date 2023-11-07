import { useQuery } from "@tanstack/react-query";
import Manage_My_Foods_Card from "../Manage_My_Foods_Card/Manage_My_Foods_Card";

const Manage_My_Foods = () => {
  const { data } = useQuery({
    queryKey: ["addedFoodData"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/addedFoodData");
      return await data.json();
    },
  });
  console.log(data);
  return (
    <div>
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Manage My Foods</span>
      </h1>
      <div>
          {
             data?.map(da => <Manage_My_Foods_Card
             key={da._id}
             data={da}
             ></Manage_My_Foods_Card>)  
          }
      </div>
    </div>
  );
};

export default Manage_My_Foods;
