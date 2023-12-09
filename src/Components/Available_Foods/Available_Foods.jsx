import { useQuery } from "@tanstack/react-query";
import AvailableFoodsCards from "../AvailableFoodsCards/AvailableFoodsCards";
import { Helmet } from "react-helmet";

const Available_Foods = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["addedFoodDataFindToExpiredDate"],
    queryFn: async () => {
      const data = fetch(
        "https://food-sharing-server-blond.vercel.app/addedFoodDataFindToExpiredDate"
      );
      return (await data).json();
    },
  });
  if (isLoading === true) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  console.log(data);

  const handleSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value;
    console.log(name)
  }


  return (
    <div>
      <Helmet>
        <title>Available_Foods</title>
      </Helmet>
      <h1 className="text-5xl my-12 font-semibold border-l-5 border-red-500 ml-16 ">
        <span className="pl-3">Available Foods</span>
      </h1>

      <div>
        <div
          className="w-full dark:bg-gray-500"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')`,
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">
              Get Our Food
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="Food Name"
                  name="name"
                  className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                />
                <button
                  type="submit"
                  className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-black text-white btn hover:text-black"
                >
                  Search Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 my-20">
        {data.map((da) => (
          <AvailableFoodsCards
            key={da._id}
            availableFood={da}
          ></AvailableFoodsCards>
        ))}
      </div>
    </div>
  );
};

export default Available_Foods;
