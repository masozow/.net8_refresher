import type { CompanySearch } from "@/API/company";
import MyCardList from "@/components/MyCardList/MyCardList";
import ListPortfolio from "@/components/Portfolio/ListPortfolio";
import { SearchForm } from "@/components/search-form";
import { useState, type SyntheticEvent } from "react";

// interface Props  {

// }

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const handleSetSearchResult = (result: CompanySearch[]) => {
    setSearchResult(result);
  };
  const onPortfolioCreate = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (form.elements[0] as HTMLInputElement).value;
    const exists = portfolioValues.includes(value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const updatedPortfolio = portfolioValues.filter(
      (value) => value !== input.value
    );
    setPortfolioValues(updatedPortfolio);
    // console.log('Event: ',e);
  };
  return (
    <section className="flex flex-1 flex-col justify-begin items-center w-full">
      <SearchForm
        searchResultData={searchResult}
        setSearchResult={handleSetSearchResult}
        className="w-full px-5 my-5 sm:ml-auto sm:w-full sm:px-40 sm:my-10"
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <MyCardList
        className="flex flex-col gap-1 md:flex-row md:gap-4"
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </section>
  );
};

export default SearchPage;
