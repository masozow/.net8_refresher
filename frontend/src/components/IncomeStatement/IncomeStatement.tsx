import { useTicker } from "@/pages/company/Company";

const IncomeStatement = () => {
  const ticker = useTicker();
  return <div>IncomeStatement: {ticker.ticker}</div>;
};

export default IncomeStatement;
