import ExtraSection from "../../Components/ExtarSection/ExtraSection";
import Banner from "./Banner/Banner";
import FoodsAvailable from "./FoodsAvailable/FoodsAvailable";
import { Helmet } from "react-helmet";

const Home = () => {
     return (
          <div>
               <Helmet>
    <title>Feast Bar Home</title>
  </Helmet>
               <Banner></Banner>
               <FoodsAvailable></FoodsAvailable>   
               <ExtraSection></ExtraSection>        
          </div>
     );
};

export default Home;