import App from "@/App";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";
import IncomeStatement from "@/components/IncomeStatement/IncomeStatement";
import Company from "@/pages/company/Company";
import Page from "@/pages/dashboard/Dashboard";
import DesignPage from "@/pages/design-page/DesignPage";
import HomePage from "@/pages/home/HomePage";
import SearchPage from "@/pages/search/Search";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "dashboard", element: <Page /> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: <Company />,
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
        ],
      },
    ],
  },
]);
