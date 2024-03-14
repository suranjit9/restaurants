import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../LayOut/Home/Home";
import OurMenu from "../LayOut/Page/OurMenu/OurMenu";
import OurShop from "../LayOut/Page/OurShop/OurShop";
import SingUp from "../LayOut/Page/SingUP/SingUp";
import SingIn from "../LayOut/Page/SingIn/SingIn";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:'/OurMenu',
        element:<OurMenu/>
      },
      {
        path:'/OurShop/:category',
        element:<OurShop/>
      },
      {
        path:'/SingUP',
        element:<SingUp/>
      },
      {
        path:'/Singin',
        element:<SingIn/>
      }
    ]
  },
]);