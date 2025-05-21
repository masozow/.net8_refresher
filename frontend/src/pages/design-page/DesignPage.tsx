import MyTable from "@/components/MyTable/MyTable";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <div className="px-10 flex flex-col justify-start">
      <h1 className="text-3xl font-bold">Finantial Web App Design Page</h1>
      <h2>
        This is Finantial Web App design page. This is where we well house
        various design aspects of the app
      </h2>
      <MyTable />
    </div>
  );
};

export default DesignPage;
