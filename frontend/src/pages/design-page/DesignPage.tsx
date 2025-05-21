import MyTable from "@/components/MyTable/MyTable";
import RatioList from "@/components/RatioList/RatioList";

interface Props {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];
const DesignPage = (props: Props) => {
  return (
    <div className="px-10 flex flex-col justify-start">
      <h1 className="text-3xl font-bold">Finantial Web App Design Page</h1>
      <h2>
        This is Finantial Web App design page. This is where we well house
        various design aspects of the app
      </h2>
      <RatioList data={"sometnihg"} config={tableConfig} />
      <MyTable />
    </div>
  );
};

export default DesignPage;
