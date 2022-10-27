import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Category from "../Pages/Courses/Category";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-10-server-theta-five.vercel.app/courses-categories'),
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-theta-five.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`https://assignment-10-server-theta-five.vercel.app/courses/${params.id}`) ,
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]
    }
]);