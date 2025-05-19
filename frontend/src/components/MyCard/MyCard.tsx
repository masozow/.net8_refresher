import type { JSX } from "react";
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
import { Divide } from "lucide-react";
import { Separator } from "../ui/separator";

interface Props  {
  id: string;
  searchResult: CompanySearch;
};

const MyCard: React.FC<Props> = ({id,searchResult}: Props): JSX.Element => {
  return (
    <div>
      <Card id={id} className="w-[20rem] h-[auto] my-2">
        <CardHeader>
          <CardDescription className="flex justify-center align-middle">
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" alt={"Logo for "+searchResult.name} />
              <AvatarFallback>{searchResult.name}</AvatarFallback>
            </Avatar>
          </CardDescription>
          <CardTitle className="text-center">{searchResult.name} ({searchResult.symbol})</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center align-middle">
          <Badge variant={"outline"} className="mr-2 text-1xl" >{searchResult.currency} </Badge>
          <p>
            {searchResult.exchange} - {searchResult.exchangeFullName}
          </p>
        </CardContent>
        <Separator className="my-1" />
        <CardFooter className="flex justify-end">
          <AddPortfolio />
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyCard;
