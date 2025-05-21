import { TestDataCompany } from "../MyTable/testData";
import Tile from "../Tile/Tile";

interface Props {}

const data = TestDataCompany[0];
type Company = typeof data;
const config = [
  {
    label: "Company Name",
    render: (company: Company) => company.companyName,
    subTitle: "This is the company name",
  },
  {
    label: "Company Name",
    render: (company: Company) => company.companyName,
    subTitle: "This is the company name",
  },
];

const RatioList = (props: Props) => {
  const renderedRow = config.map((config) => (
    <Tile
      key={config.label}
      title={config.label}
      subtitle={config.subTitle}
      data={config.render(data)}
      className="w-full"
    />
  ));
  return <ul className="flex flex-col">{renderedRow}</ul>;
};

export default RatioList;
