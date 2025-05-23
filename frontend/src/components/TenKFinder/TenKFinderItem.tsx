import type { CompanyTenK } from "@/API/company";
import { Link } from "react-router-dom";

interface Props {
  tenK: CompanyTenK;
}

const TenKFinderItem = ({ tenK }: Props) => {
  const filingDate = new Date(tenK.filingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      type="button"
      className="inline-flex items-center p-4
      ml-2
      text-white
      bg-green-600
      rounded-xl"
    >
      10K - {tenK.symbol} - {filingDate}
    </Link>
  );
};

export default TenKFinderItem;
