import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
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
                element: <Dashboard/>
            }
        ]
       
    }
]);
export default router;