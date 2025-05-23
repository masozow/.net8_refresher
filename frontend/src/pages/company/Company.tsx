import { getCompanyProfile } from "@/API/api";
import type { CompanyProfile } from "@/API/company";
import CompanyFinder from "@/components/CompanyFinder/CompanyFinder";
import TenKFinder from "@/components/TenKFinder/TenKFinder";
import Tile from "@/components/Tile/Tile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router";
import { NavLink } from "react-router-dom";

type ContextType = { ticker: string | null };

const Company = () => {
  const { ticker = null } = useParams() as { ticker: string | null };
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
              className="sm:w-1/2 md:w-1/4"
            />
            <Tile
              title="Price"
              subtitle={company.price.toString()}
              className="sm:w-1/2 md:w-1/4"
            />
            <Tile
              title="Sector"
              subtitle={company.sector}
              className="sm:w-1/2 md:w-1/4"
            />
            <Tile
              title="Capitalization"
              subtitle={company.marketCap.toString()}
              className="sm:w-1/2 md:w-1/4"
            />
            <Tile
              subtitle={company.description}
              className="w-full max-h-[10rem] overflow-auto y-scroll"
            />
            <CompanyFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
          </div>
          <Tabs
            defaultValue="profile"
            className="w-full bg-gray-50 rounded overflow-x-scroll"
          >
            <TabsList>
              <TabsTrigger value="company-profile" defaultChecked>
                <NavLink to="company-profile">Company Profile</NavLink>
              </TabsTrigger>
              <TabsTrigger value="income-statement">
                <NavLink to="income-statement">Income statement</NavLink>
              </TabsTrigger>
              <TabsTrigger value="balance-sheet">
                <NavLink to="balance-sheet">Balance sheet</NavLink>
              </TabsTrigger>
              <TabsTrigger value="cashflow-statement">
                <NavLink to="cashflow-statement">Cashflow statement</NavLink>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="company-profile" defaultChecked forceMount>
              <Outlet context={{ ticker } satisfies ContextType} />
            </TabsContent>
            <TabsContent value="income-statement" forceMount>
              <Outlet context={{ ticker } satisfies ContextType} />
            </TabsContent>
            <TabsContent value="balance-sheet" forceMount>
              <Outlet context={{ ticker } satisfies ContextType} />
            </TabsContent>
            <TabsContent value="cashflow-statement" forceMount>
              <Outlet context={{ ticker } satisfies ContextType} />
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
