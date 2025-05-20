import type { CompanySearch } from "@/API/company";
import MyCardList from "@/components/MyCardList/MyCardList"
import ListPortfolio from "@/components/Portfolio/ListPortfolio"
import { SearchForm } from "@/components/search-form";
import { useState, type SyntheticEvent } from "react";

// interface Props  {

// }

const SearchPage = () => {
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
    <section className="flex flex-1 flex-col justify-begin items-center">
        <SearchForm searchResult={searchResult} setSearchResult={setSearchResult} className="w-full sm:ml-auto sm:w-auto" />
        <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
        <MyCardList className="flex flex-col gap-1 md:flex-row md:gap-4" searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </section>
  )
}

export default SearchPage