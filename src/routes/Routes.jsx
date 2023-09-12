import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import JobListing from "../pages/JobListing/JobListing";
import Statistics from "../pages/Statistics/Statistics";
import Blog from "../pages/Blog/Blog";
import NotFound from "../pages/NotFound/NotFound";
import JobDetails from "../pages/JobDetails/JobDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'joblisting',
            element: <JobListing></JobListing>,
            loader: () => fetch("/jobs.json")
        }, 
        {
            path: 'statistics',
            element: <Statistics></Statistics>
        }, 
        {
            path: 'blog',
            element: <Blog></Blog>
        }, 
        {
            path: 'details/:id',
            element: <JobDetails></JobDetails>,
            loader: () => fetch("/jobs.json")
        }, 
        {
            path: '*',
            element:<NotFound></NotFound>
        }
        
       
      ]
    }
  ]);
