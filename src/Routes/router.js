import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import AllSellers from "../Pages/AllSellers/AllSellers";
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Advertised from "../Pages/Home/Advertised/Advertised";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Payment from "../Pages/Payment/Payment";
import ReportedItems from "../Pages/ReportedItems/ReportedItems";
import SignUp from "../Pages/SignUp/SignUp";
import WishList from "../Pages/WishLish/WishList";
import AdminRoutes from "./AdminRoutes";
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
                path: '/',
                element: <Advertised/>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><CategoryDetails/></PrivateRoutes>,
                loader: ({params})=> fetch(`${process.env.REACT_APP_URL}/category/${params.id}`)
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
                element: <Dashboard/>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders/>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_URL}/dashboard/payment/${params.id}`)
            },
            {
                path: '/dashboard/wishList',
                element: <WishList/>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct/>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoutes><AllSellers/></AdminRoutes>,
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoutes><AllBuyers/></AdminRoutes>
            },
            {
                path: '/dashboard/report',
                element: <AdminRoutes><ReportedItems/></AdminRoutes>
            }
        ]
       
    }
]);
export default router;