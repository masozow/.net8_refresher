import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;
type Company = (typeof data)[0];

const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];

interface Props {}

const MyTable = (props: Props) => {
  const renderedRows = data.map((company) => (
    <TableRow key={company.cik}>
      {configs.map((config) => (
        <TableCell key={config.label}>{config.render(company)}</TableCell>
      ))}
    </TableRow>
  ));
  const renderedHeader = configs.map((config) => (
    <TableHead key={config.label} className="font-bold tracking-widest ">
      {config.label}
    </TableHead>
  ));
  return (
    <Table className="mt-4">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>{renderedHeader}</TableRow>
      </TableHeader>
      <TableBody>{renderedRows}</TableBody>
    </Table>
  );
};

export default MyTable;
