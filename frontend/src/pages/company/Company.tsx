import { getCompanyProfile } from "@/API/api";
import type { CompanyProfile } from "@/API/company";
import Tile from "@/components/Tile/Tile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router";
import { NavLink } from "react-router-dom";

type ContextType = { ticker: string };

const Company = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getCompany = async () => {
      if (ticker) {
        const response = await getCompanyProfile(ticker);
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
              className="w-1/3"
            />
          </div>
          <Tabs defaultValue="profile" className="w-full bg-gray-50">
            <TabsList>
              <TabsTrigger value="company-profile rounded" defaultChecked>
                <NavLink to="company-profile">Company Profile</NavLink>
              </TabsTrigger>
              <TabsTrigger value="income-statement">
                <NavLink to="income-statement">Income statement</NavLink>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="company-profile" defaultChecked>
              <Outlet context={{ ticker } as ContextType} />
            </TabsContent>
            <TabsContent value="income-statement">
              <Outlet context={{ ticker } as ContextType} />
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

export function useTicker() {
  return useOutletContext<ContextType>();
}
