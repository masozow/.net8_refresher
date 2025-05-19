import type { JSX } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { CompanySearch } from "@/API/company";

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
          <CardTitle className="flex justify-center">{searchResult.name} ({searchResult.symbol})</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <p>({searchResult.currency}) &nbsp;</p>
          <p>
            {searchResult.exchange} - {searchResult.exchangeFullName}
          </p>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default MyCard;
