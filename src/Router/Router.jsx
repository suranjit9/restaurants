import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../LayOut/Home/Home";

 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
          }
      ]
    },
  ]);