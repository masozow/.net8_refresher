import type { JSX, SyntheticEvent } from "react"
import MyCard from "../MyCard/MyCard"
import { cn } from "@/lib/utils"
import type { CompanySearch } from "@/API/company"
import {v4 as uuidv4} from 'uuid'
interface Props  {
    className?: string,
    searchResult?: CompanySearch[],
    onPortfolioCreate: (e:SyntheticEvent) => void  
}

const MyCardList: React.FC<Props> = ({className,searchResult,onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-4", className)}>
      { searchResult?.length !== 0 ?
        searchResult?.map((company) => (
          <MyCard
            id={company.symbol}
            key={uuidv4()}
            searchResult={company}
            onPortfolioCreate={onPortfolioCreate}
          />
        )): <h1 className="text-red-700 ">No results found</h1> }
    </div>
  )
}

export default MyCardList