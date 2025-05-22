import type { SyntheticEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DeletePortfolio from "./DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <Card className="w-[20rem] h-[auto] my-2">
      <CardHeader className="flex justify-center">
        <CardTitle>
          <Link to={`/company/${portfolioValue}/company-profile`}>
            {portfolioValue}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-end">
        <DeletePortfolio
          onPortfolioDelete={onPortfolioDelete}
          portfolioValue={portfolioValue}
        />
      </CardContent>
    </Card>
  );
};

export default CardPortfolio;
