import type { JSX } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props  {
  companyName: string;
  price: number;
  companySymbol: string;
};

const MyCard: React.FC<Props> = ({companyName, price, companySymbol}: Props): JSX.Element => {
  return (
    <div>
      <Card className="w-[20rem] h-[auto] my-2">
        <CardHeader>
          <CardDescription className="flex justify-center align-middle">
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{companySymbol}</AvatarFallback>
            </Avatar>
          </CardDescription>
          <CardTitle>{companyName} ({companySymbol})</CardTitle>
        </CardHeader>
        <CardContent>
          <p>${price}</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur debitis, unde tempora soluta voluptates at nesciunt
            obcaecati eligendi aut accusamus, aspernatur ipsam, officiis
            repudiandae inventore minus alias dignissimos temporibus maxime!
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
