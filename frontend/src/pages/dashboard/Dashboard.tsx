import type { CompanySearch } from "@/API/company";
import { AppSidebar } from "@/components/app-sidebar"
import MyCardList from "@/components/MyCardList/MyCardList"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useState, type SyntheticEvent } from "react";

export default function Page() {
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const onPortfolioCreate = (e:SyntheticEvent) => {
      e.preventDefault();
      console.log('Event: ',e);
    }
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        
            <SiteHeader setSearchResult={setSearchResult} searchResult={searchResult}/>
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset className="flex flex-wrap items-center justify-center py-2">
                <MyCardList className="flex flex-col gap-1 md:flex-row md:gap-4" searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
              </SidebarInset>
            </div>
      </SidebarProvider>
    </div>
  )
}
