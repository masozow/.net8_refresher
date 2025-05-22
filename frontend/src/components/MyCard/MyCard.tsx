import type { JSX, SyntheticEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { CompanySearch } from "@/API/company";
import { Badge } from "../ui/badge";
import AddPortfolio from "../Portfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent<HTMLFormElement>) => void;
}

const MyCard: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div>
      <Card id={id} className="w-[20rem] h-[auto] my-2">
        <CardHeader>
          <CardDescription className="flex justify-center align-middle">
            <Avatar className="w-40 h-40">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={"Logo for " + searchResult.name}
              />
              <AvatarFallback>{searchResult.name}</AvatarFallback>
            </Avatar>
          </CardDescription>
          <CardTitle className="text-center">
            <Link to={`/company/${searchResult.symbol}/company-profile`}>
              {searchResult.name} ({searchResult.symbol})
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center align-middle">
          <Badge variant={"outline"} className="mr-2 text-1xl">
            {searchResult.currency}{" "}
          </Badge>
          <p>
            {searchResult.exchange} - {searchResult.exchangeFullName}
          </p>
        </CardContent>

        <CardFooter className="flex justify-end">
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={searchResult.symbol}
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyCard;
