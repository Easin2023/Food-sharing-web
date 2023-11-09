import ExtraSection from "../../Components/ExtarSection/ExtraSection";
import Banner from "./Banner/Banner";
import FoodsAvailable from "./FoodsAvailable/FoodsAvailable";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <FoodsAvailable></FoodsAvailable>   
               <ExtraSection></ExtraSection>        
          </div>
     );
};

export default Home;