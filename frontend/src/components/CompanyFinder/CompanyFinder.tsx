import type { CompanyComparableData } from "@/API/company";
import React, { useState } from "react";

interface Props {
  ticker: string;
}

const CompanyFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyComparableData[]>();
  return <div>CompanyFinder</div>;
};

export default CompanyFinder;
