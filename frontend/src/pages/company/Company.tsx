import { getCompanyProfile } from "@/API/api";
import type { CompanyProfile } from "@/API/company";
import Tile from "@/components/Tile/Tile";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router"
import { NavLink } from "react-router-dom";



const Company = () => {
  const {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getCompany = async () => {
      if (ticker) {
        const response = await getCompanyProfile(ticker);
        console.log('Response: ', response);
          if (Array.isArray(response) && response.length > 0) {
            setCompany(response[0]);
          } else if (typeof response === "string") {
            console.error("Error fetching company profile:", response);
          }
      }
    }
    getCompany();
  },[ticker]);

  return (
    <div className="w-full px-10">
      {
      company ?
      ( 
        <div>
          <Tile title={company.companyName} subtitle={company.symbol}/>
          <div className="flex w-full bg-gray-200 rounded">
            <NavLink className={({isActive}) => `p-2 ${isActive ? "bg-gray-400" : ""}`} to={`company-profile`}>Profile</NavLink>
            <NavLink className={({isActive}) => `p-2 ${isActive ? "bg-gray-400" : ""}`} to={`income-statement`}>Income statement</NavLink>
          </div>
          <Outlet/>
        </div>
      ):
        <h1>Company not found</h1>
      }
    </div>
  )
}

export default Company