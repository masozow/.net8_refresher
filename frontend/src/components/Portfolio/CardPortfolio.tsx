
import type { SyntheticEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import DeletePortfolio from './DeletePortfolio';

interface Props  {
    portfolioValue: string;
    onPortfolioDelete: (e:SyntheticEvent) => void
}

const CardPortfolio = ({portfolioValue,onPortfolioDelete}: Props) => {
  return (
    <Card>
        <CardHeader className="flex justify-between w-auto">
            <CardTitle>{portfolioValue}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="flex justify-end">
            <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue}/>
        </CardContent>
        {/* <CardFooter>
            <p>Card Footer</p>
        </CardFooter> */}
    </Card>
  )
}

export default CardPortfolio