import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Banner/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
     }
    ]
  },
]);

export default Router;
