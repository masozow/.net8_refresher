import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

const MyCard = (props: Props) => {
  return (
    <div>
      <Card className="w-[20rem] h-[auto]">
        <CardHeader>
          <CardDescription className="flex justify-center align-middle">
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardDescription>
          <CardTitle>AAPL</CardTitle>
        </CardHeader>
        <CardContent>
          <p>$150</p>
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
