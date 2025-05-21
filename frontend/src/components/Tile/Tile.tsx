import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title: string;
  subtitle: string;
  className?: string;
  key?: string;
  data?: React.ReactNode;
}

const Tile = ({ title, key, subtitle, className, data }: Props) => {
  return (
    <Card
      key={key}
      className={cn(`w-[20rem] h-[auto] my-2 border-0 shadow-xl`, className)}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex justify-between">
            <span>{subtitle}</span>
            <span className="font-bold">{data}</span>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Tile;
