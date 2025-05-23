import { getComparableData } from "@/API/api";
import type { CompanyComparableData } from "@/API/company";
import { memo, useEffect, useState } from "react";
import CompanyFinderItem from "./CompanyFinderItem";

interface Props {
  ticker: string;
}

const CompanyFinder = memo(({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyComparableData[]>();
  useEffect(() => {
    const fetchComparableData = async () => {
      const result = await getComparableData(ticker);
      if (Array.isArray(result) && result.length > 0) {
        setCompanyData(result);
      } else if (typeof result === "string") {
        console.error("Error fetching comprable data:", result);
      }
    };
    if (ticker) {
      fetchComparableData();
    }
  }, [ticker]);
  return (
    <div className="inline-flex rounded-lg shadow-sm my-4">
      {companyData?.map((data) => (
        <CompanyFinderItem key={data.symbol} ticker={data.symbol} />
      ))}
    </div>
  );
});

export default CompanyFinder;
