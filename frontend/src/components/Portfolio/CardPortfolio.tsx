import type { SyntheticEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import DeletePortfolio from './DeletePortfolio';
import { Link } from 'react-router-dom';

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <Card className='w-full'>
      <CardHeader className="flex justify-between">
        <CardTitle className="flex text-center">
          <Link to={`/company/${portfolioValue}`}>{portfolioValue}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-end">
        <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue} />
      </CardContent>
    </Card>
  );
};

export default CardPortfolio;
