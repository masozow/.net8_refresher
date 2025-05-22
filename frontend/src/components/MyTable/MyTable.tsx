import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
interface Props {
  data: any;
  config: {
    label: string;
    render: (data: any) => React.ReactNode;
  }[];
}

const MyTable = ({ data, config }: Props) => {
  const renderedRows = data.map((company: any) => (
    <TableRow key={company.cik}>
      {config.map((config) => (
        <TableCell key={config.label}>{config.render(company)}</TableCell>
      ))}
    </TableRow>
  ));
  const renderedHeader = config.map((conf) => (
    <TableHead key={conf.label} className="font-bold tracking-widest ">
      {conf.label}
    </TableHead>
  ));
  return (
    <Table className="mt-4">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>{renderedHeader}</TableRow>
      </TableHeader>
      <TableBody>{renderedRows}</TableBody>
    </Table>
  );
};

export default MyTable;
