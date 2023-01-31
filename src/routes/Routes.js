import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([{

    path: '/',
    element: <Main />,
    children: [
        {
            path: '/login',
            // element: <Home />
            element: <Login />
        },
        // {
        //     path: '/',
        //     element: <Login />
        // },
        {
            path: '/signup',
            element: <Signup />
        },
    ]

}])

export default router;