import {createBrowserRouter,} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../LayOut/Home/Home";
import OurMenu from "../LayOut/Page/OurMenu/OurMenu";
import OurShop from "../LayOut/Page/OurShop/OurShop";
import SingUp from "../LayOut/Page/SingUP/SingUp";
import SingIn from "../LayOut/Page/SingIn/SingIn";
import UserDeshBord from "../LayOut/UserDeshBord/UserDeshBord";
import CartsPage from "../LayOut/UserDeshBord/CartsPage";
import AllUser from "../LayOut/UserDeshBord/All Users/AllUser";
import AddItem from "../LayOut/UserDeshBord/AddList/AddItem";
import Adminprovider from "../Provider/Adminprovider";
import ManageList from "../LayOut/UserDeshBord/ManageList/ManageList";
import UpdateItem from "../LayOut/UserDeshBord/Update/UpdateItem";
import Peymant from "../LayOut/UserDeshBord/Peymant/Peymant";
import PayHistory from "../LayOut/UserDeshBord/Peymant/PayHistory";
import AdminHome from "../LayOut/UserDeshBord/AdminHome/AdminHome";
import UserHome from "../LayOut/UserDeshBord/UserHome/UserHome";




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
  {
    path:"userdeshbord",
    element:<UserDeshBord></UserDeshBord>,
    children: [
      {
        path:'UserHome',
        element:<UserHome></UserHome>
      },
      {
        path:"UserCart",
        element:<CartsPage></CartsPage>
      },
      {
        path:'payment',
        element:<Peymant></Peymant>
      },
      {
        path:'paymentHistory',
        element:<PayHistory></PayHistory>
      },
      // Admin Route----------
      {
        path:'AdminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'users',
        element: <Adminprovider><AllUser/></Adminprovider>
      },
      {
        path:'additem',
        element:<Adminprovider><AddItem/></Adminprovider>
      },
      {
        path:'ManageList',
        element:<Adminprovider><ManageList></ManageList></Adminprovider>
      },
      {
        path:'updateItem/:id',
        element:<UpdateItem></UpdateItem>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);