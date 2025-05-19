import { AppSidebar } from "@/components/app-sidebar"
import MyCardList from "@/components/MyCardList/MyCardList"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
    
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        
            <SiteHeader />
            <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset className="flex items-center justify-center py-2">
                <MyCardList className="flex flex-col gap-1 md:flex-row md:gap-4" />
            </SidebarInset>
            </div>
      </SidebarProvider>
    </div>
  )
}
