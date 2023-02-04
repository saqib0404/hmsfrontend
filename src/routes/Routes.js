import Main from "../layout/Main";
import AllUsers from "../pages/AllUsers/AllUsers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerifyReq from "../pages/VerifyReq/VerifyReq";
import MainAdminRoute from "./MainAdminRoute";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([{

    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <PrivateRoute><Home /></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/all-users',
            element: <MainAdminRoute><AllUsers /></MainAdminRoute>
        },
        {
            path: '/verfy-requests',
            element: <MainAdminRoute><VerifyReq /></MainAdminRoute>
        },
    ]

}])

export default router;