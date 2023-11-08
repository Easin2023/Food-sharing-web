import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../../Pages/Footer/Footer';

const MainLayout = () => {
     return (
          <div>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;