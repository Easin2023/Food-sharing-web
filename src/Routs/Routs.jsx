import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Banner/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Private from "../Private/Private";
import Add_Food from "../Components/Add_Food/Add_Food";
import Manage_My_Foods from "../Components/Manage_My_Foods/Manage_My_Foods";
import My_Food_Request from "../Components/My_Food_Request/My_Food_Request";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
          path: "/",
          element: <Home></Home>
     },
     {
      path: "/login",
      element: <Login></Login>
     },
     {
      path: "/signUp",
      element: <SignUp></SignUp>
     },
     {
      path: "/Available_Foods"
     },
     {
      path: "/Add_Food",
      element: <Private><Add_Food></Add_Food></Private>
     },
     {
      path: "/Manage_My_Foods",
      element: <Private><Manage_My_Foods></Manage_My_Foods></Private>
     },
     {
      path: "/My_Food_Request",
      element: <Private><My_Food_Request></My_Food_Request></Private>
     }
    ]
  },
]);

export default Router;
