// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
import type { SyntheticEvent } from "react";
import CardPortfolio from "./CardPortfolio";

interface Props{
    portfolioValues: string[];
    onPortfolioDelete: (e:SyntheticEvent) => void ;
}

export default function ListPortfolio({portfolioValues,onPortfolioDelete}: Props) {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul className="flex flex-wrap gap-2 my-1">
        {portfolioValues && portfolioValues.map((value) => (
          <li key={value}><CardPortfolio portfolioValue={value} onPortfolioDelete={onPortfolioDelete}/></li>
        ))}
      </ul>
    </>
    // <Table>
    //     <TableCaption>My portfolio</TableCaption>
    //     <TableHeader>
    //         <TableRow>
    //         <TableHead className="w-[100px]">Invoice</TableHead>
    //         <TableHead>Status</TableHead>
    //         <TableHead>Method</TableHead>
    //         <TableHead className="text-right">Amount</TableHead>
    //         </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //         <TableRow>
    //         <TableCell className="font-medium">INV001</TableCell>
    //         <TableCell>Paid</TableCell>
    //         <TableCell>Credit Card</TableCell>
    //         <TableCell className="text-right">$250.00</TableCell>
    //         </TableRow>
    //     </TableBody>
    // </Table>
  )
};