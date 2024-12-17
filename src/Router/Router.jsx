import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Mainlayout from "../Layout/Mainlayout";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Home/SignIn/SignIn";
import JobDetails from "../Pages/JobDeatils/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplication/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobPost from "../Pages/MyPostJob/MyJobPost";
import ViewApplications from "../Pages/ViewApplications";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: "/", 
            element: <Home></Home>
        },
        {
            path: "/jobs/:id", 
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader:({params})=> fetch (`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: "/register", 
            element: <Register></Register>
        },
        {
            path: "/signin", 
            element: <SignIn></SignIn>
        },
        {
            path: "/jobs/:id/:id", 
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
            path: "/add-job", 
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path: "/myApplication", 
            element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
            path: "/my-post-job", 
            element: <PrivateRoute><MyJobPost></MyJobPost></PrivateRoute>
        },
        {
            path: "/view-application/:job_id", 
            element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>
        },
      ]
    },
  ]);

  export default router;