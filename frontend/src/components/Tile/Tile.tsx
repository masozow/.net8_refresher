import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface Props  {
    title:string;
    subtitle:string;
}

const Tile = ({title, subtitle}: Props) => {
  return (
    <Card className="w-[20rem] h-[auto] my-2 border-0 shadow-xl">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default Tile