import type { CompanyIncomeStatement } from "@/API/company";
import { useTicker } from "@/pages/company/Company";
import { memo, useEffect, useState } from "react";
import MyTable from "../MyTable/MyTable";
import { getIncomeStatement } from "@/API/api";

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) => company.costOfRevenue,
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      company.depreciationAndAmortization,
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) => company.operatingIncome,
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => company.eps,
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) => company.epsdiluted,
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
  },
  {
    label: "Opearting Income Ratio",
    render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
  },
];
const IncomeStatement = memo(() => {
  const ticker = useTicker();
  const [incomeStatement, setIncomeStatement] =
    useState<CompanyIncomeStatement[]>();

  useEffect(() => {
    const fetchIncomeStatment = async () => {
      const value = await getIncomeStatement(ticker.ticker);
      if (Array.isArray(value) && value.length > 0) {
        setIncomeStatement(value);
      } else if (typeof value === "string") {
        console.error("Error fetching company key metrics:", value);
      }
    };
    fetchIncomeStatment();
  }, [ticker.ticker]);

  return (
    <>
      {incomeStatement ? (
        <>
          <MyTable data={incomeStatement} config={configs} />
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
});

export default IncomeStatement;
