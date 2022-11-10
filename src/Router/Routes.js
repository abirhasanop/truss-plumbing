import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Allservices from "../Pages/AllServices/Allservices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditReviewPage from "../Pages/MyReview/EditReviewPage";
import MyReview from "../Pages/MyReview/MyReview";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Allservices />
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://assignment11-server-beta.vercel.app/services/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                loader: ({ params }) => fetch(`https://assignment11-server-beta.vercel.app/review/${params.id}`),
                element: <EditReviewPage />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService /></PrivateRoute>
            }
        ]
    }
])