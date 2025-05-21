import { getBalanceSheet } from "@/API/api";
import type { CompanyBalanceSheet } from "@/API/company";
import { useTicker } from "@/pages/company/Company";
import { memo, useEffect, useState } from "react";
import RatioList from "../RatioList/RatioList";

const configs = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) => company.intangibleAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
  {
    label: <div className="font-bold">Total Liabilites</div>,
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) => company.otherLiabilities,
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) => company.retainedEarnings,
  },
];
const BalanceSheet = memo(() => {
  const ticker = useTicker();
  const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
  useEffect(() => {
    const getData = async () => {
      const value = await getBalanceSheet(ticker.ticker);
      if (Array.isArray(value) && value.length > 0) {
        setBalanceSheet(value[0]);
      } else if (typeof value === "string") {
        console.error("Error fetching balance sheet:", value);
      }
    };
    getData();
  }, [ticker.ticker]);
  return (
    <>
      {balanceSheet ? (
        <RatioList data={balanceSheet} config={configs} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
});

export default BalanceSheet;
