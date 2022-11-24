import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
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
                path: <SignUp/>
            }
        ]
    }
]);
export default router;