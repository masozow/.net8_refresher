import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

interface Props {
  ticker: string;
}

const CompanyFinderItem = ({ ticker }: Props) => {
  return (
    <NavLink
      to={`/company/${ticker}/company-profile`}
      type="button"
      className="inline-flex items-center p-4 rounded-lg"
    >
      {ticker}
    </NavLink>
  );
};

export default CompanyFinderItem;
