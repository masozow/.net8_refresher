import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { X } from 'lucide-react';
import { Button } from '../ui/button';

interface Props  {
    portfolioValue: string;
}

const CardPortfolio = ({portfolioValue}: Props) => {
  return (
    <Card>
        <CardHeader className="flex justify-between w-auto">
            <CardTitle>{portfolioValue}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="flex justify-end">
            <Button><X/></Button>
        </CardContent>
        {/* <CardFooter>
            <p>Card Footer</p>
        </CardFooter> */}
    </Card>
  )
}

export default CardPortfolio