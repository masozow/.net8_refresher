import { getTenK } from "@/API/api";
import { type CompanyTenK } from "@/API/company";
import { memo, useEffect, useState, type JSX } from "react";
import TenKFinderItem from "./TenKFinderItem";

interface Props {
  ticker: string;
}

const TenKFinder = memo(({ ticker }: Props): JSX.Element => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const fetchTenKData = async () => {
      const result = await getTenK({ query: ticker, page: 0, maximum: 10 });
      if (Array.isArray(result) && result.length > 0) {
        setCompanyData(result);
      } else if (typeof result === "string") {
        console.error("Error fetching tenK data:", result);
      }
    };
    if (ticker) {
      fetchTenKData();
    }
  }, [ticker]);
  return (
    <div className="inline-flex rounded-xl shadow-xl my-4">
      {companyData ? (
        companyData?.map((data, index) => (
          <TenKFinderItem key={index} tenK={data} />
        ))
      ) : (
        <p className="p-4">No tenK data found</p>
      )}
    </div>
  );
});

export default TenKFinder;
