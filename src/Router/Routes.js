import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
                element: <PrivateRoute><Allservices /></PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
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
                element: <MyReview />
            },
            {
                path: '/editreview/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
                element: <EditReviewPage />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])