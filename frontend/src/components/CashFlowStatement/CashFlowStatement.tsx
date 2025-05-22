import { getCashFlowStatement } from "@/API/api";
import type { CompanyCashFlow } from "@/API/company";
import { useTicker } from "@/pages/company/Company";
import { useEffect, useState } from "react";
import MyTable from "../MyTable/MyTable";
import { LoadingSpinner } from "../ui/loading-spinner";

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashFlowStatement = () => {
  const ticker = useTicker();
  const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const fetchCashFlowStatement = async () => {
      const result = await getCashFlowStatement(ticker.ticker);
      if (Array.isArray(result) && result.length > 0) {
        setCashflowData(result);
      }
    };
    fetchCashFlowStatement();
  }, [ticker.ticker]);
  return (
    <>
      {cashflowData ? (
        <MyTable data={cashflowData} config={config} />
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default CashFlowStatement;
