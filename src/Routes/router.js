import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: '/category',
                element: <CategoryDetails/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayouts/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
       
    }
]);
export default router;