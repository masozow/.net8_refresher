import Tile from "../Tile/Tile";

interface Props {
  config: {
    label: string;
    subTitle: string;
    render: (data: any) => React.ReactNode;
  }[];
  data: any;
}

const RatioList = ({ config, data }: Props) => {
  const renderedRow = config.map((config) => (
    <Tile
      key={config.label}
      title={config.label}
      subtitle={config.subTitle}
      specificData={config.render(data)}
      className="w-full my-0"
    />
  ));
  return <div className="flex flex-col w-full gap-0">{renderedRow}</div>;
};

export default RatioList;
