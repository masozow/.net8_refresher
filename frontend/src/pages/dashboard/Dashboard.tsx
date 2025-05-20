import type { CompanySearch } from "@/API/company";
import { AppSidebar } from "@/components/app-sidebar"
import Hero from "@/components/Hero/Hero";
import MyCardList from "@/components/MyCardList/MyCardList"
import ListPortfolio from "@/components/Portfolio/ListPortfolio";
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useState, type SyntheticEvent } from "react";

export default function Page() {
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const onPortfolioCreate = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const value = (form.elements[0] as HTMLInputElement).value;
      const exists = portfolioValues.includes(value);
      if (exists) return;
      const updatedPortfolio = [...portfolioValues, value];
      setPortfolioValues(updatedPortfolio);
    }

    const onPortfolioDelete = (e: SyntheticEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const updatedPortfolio = portfolioValues.filter((value) => value !== input.value);
      setPortfolioValues(updatedPortfolio);
      // console.log('Event: ',e);
    }
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        
            <SiteHeader setSearchResult={setSearchResult} searchResult={searchResult}/>
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset className="flex flex-wrap items-center justify-center py-2">
                <Hero />
                <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
                <MyCardList className="flex flex-col gap-1 md:flex-row md:gap-4" searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
              </SidebarInset>
            </div>
      </SidebarProvider>
    </div>
  )
}

