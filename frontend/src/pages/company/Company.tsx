import { getCompanyProfile } from "@/API/api";
import type { CompanyProfile } from "@/API/company";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

interface Props  {
    
}

const Company = (props: Props) => {
  const {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getCompany = async () => {
      if (ticker) {
        const response = await getCompanyProfile(ticker);
        console.log('Response: ', response);
          if (Array.isArray(response) && response.length > 0) {
            setCompany(response[0]);
          } else if (typeof response === "string") {
            console.error("Error fetching company profile:", response);
          }
      }
    }
    getCompany();
  },[ticker]);

  return (
    <>
    {
    company ?
    ( 
      <div>
        <h1>{company.companyName}</h1>
      </div>
    ):
      <h1>Company not found</h1>

    }
    </>
  )
}

export default Company