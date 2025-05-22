import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title?: string | null;
  subtitle?: string | null;
  className?: string;
  specificData?: React.ReactNode;
}

const Tile = ({
  title,
  subtitle = null,
  className,
  specificData: data,
}: Props) => {
  return (
    <Card className={cn(`w-full h-[auto] my-2 border-0 shadow-xl`, className)}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <span>{title}</span>
            <span className="font-bold">{data}</span>
          </div>
        </CardTitle>
        {subtitle && (
          <CardDescription>
            <span>{subtitle === null ? "" : subtitle}</span>
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};

export default Tile;
