import App from "@/App";
import Company from "@/pages/company/Company";
import Page from "@/pages/dashboard/Dashboard";
import HomePage from "@/pages/home/HomePage";
import SearchPage from "@/pages/search/Search";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path:"", element:<HomePage/>},
            { path:"search",element:<SearchPage/>},
            { path:"dashboard", element:<Page/>},
            { path:"company/:ticker",element:<Company/>}
        ]
    }
]);