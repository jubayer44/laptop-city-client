import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import AllSellers from "../Pages/AllSellers/AllSellers";
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts";
import SignUp from "../Pages/SignUp/SignUp";
import WishList from "../Pages/WishLish/WishList";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><CategoryDetails/></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayouts/></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders/>
            },
            {
                path: '/dashboard/wishList',
                element: <WishList/>
            },
            {
                path: '/dashboard',
                element: <AddProduct/>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts/>
            },
            {
                path: '/dashboard',
                element: <AllSellers/>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers/>
            },
        ]
       
    }
]);
export default router;