import { getCompanyProfile } from "@/API/api";
import type { CompanyProfile } from "@/API/company";
import Tile from "@/components/Tile/Tile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Company = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getCompany = async () => {
      if (ticker) {
        const response = await getCompanyProfile(ticker);
        console.log("Response: ", response);
        if (Array.isArray(response) && response.length > 0) {
          setCompany(response[0]);
        } else if (typeof response === "string") {
          console.error("Error fetching company profile:", response);
        }
      }
    };
    getCompany();
  }, [ticker]);

  return (
    <div className="w-full px-10">
      {company ? (
        <div>
          <div className="flex flex-wrap">
            <Tile
              title={company.companyName}
              subtitle={company.symbol}
              className="w-1/2"
            />
            <Tile
              title={company.companyName}
              subtitle={company.symbol}
              className="w-1/2"
            />
            <Tile
              title={company.companyName}
              subtitle={company.symbol}
              className="w-1/2"
            />
            <Tile
              title={company.companyName}
              subtitle={company.symbol}
              className="w-1/2"
            />
          </div>
          <Tabs defaultValue="profile" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="company-profile">
                <NavLink to="company-profile">Company Profile</NavLink>
              </TabsTrigger>
              <TabsTrigger value="income-statement">
                <NavLink to="income-statement">Income statement</NavLink>
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="company-profile"
              defaultChecked
              className="px-3"
            >
              <Outlet />
            </TabsContent>
            <TabsContent value="income-statement" className="px-3">
              <Outlet />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <h1>Company not found</h1>
      )}
    </div>
  );
};

export default Company;
