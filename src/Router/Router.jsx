import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../LayOut/Home/Home";
import OurMenu from "../LayOut/Page/OurMenu/OurMenu";


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
      }
    ]
  },
]);