import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import { SidebarInput } from "@/components/ui/sidebar"
import { useState, type JSX, type SyntheticEvent } from "react"
import type { CompanySearch } from "@/API/company"
import { searchCompanies } from "@/API/api"


interface SearchFormProps extends React.ComponentProps<"form"> {
  searchResult: CompanySearch[]
  setSearchResult: (value: CompanySearch[]) => void
}
export const SearchForm: React.FC<SearchFormProps> = ({ ...props }: SearchFormProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    }
    const onSearchSubmit = async (e:SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result ==="string"){
        setServerError(result);
      }else if(Array.isArray(result.data)){
        props.setSearchResult(result.data);
      }
      console.log(props.searchResult);
      console.log("Error: ", serverError);
    }
  return (
    <form {...props} onSubmit={onSearchSubmit}>
      <div className="relative">
        <div className="flex flex-row items-center justify-center"> 
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Type to search..."
          className="h-9 pl-7"
          value={search}
          onChange={handleChange} 
        />
        <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        {serverError && <p className="text-red-500">{serverError}</p>}
         </div>
      </div>
      
    </form>
  )
}

