import { Search } from "lucide-react"

import { Label } from "@/components/ui/label"
import { SidebarInput } from "@/components/ui/sidebar"
import { useState, type JSX } from "react"


interface SearchFormProps extends React.ComponentProps<"form"> {
  searchTerm: string
}
export const SearchForm:React.FC<SearchFormProps> = ({ ...props }: SearchFormProps):JSX.Element =>{
  const [search, setSearch] = useState<string>("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Type to search..."
          className="h-8 pl-7"
          value={search}
          onChange={onSearchChange} 
        />
        <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        
      </div>
      <p>{search}</p>
    </form>
  )
}

