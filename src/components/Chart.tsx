import { ResponsiveBar } from "@nivo/bar";

interface IChartProps {
  data: any;
  selectedStation: string;
}

const Chart: React.FC<IChartProps> = ({ data, selectedStation }) => {
  console.log({ data });

  return (
    <>
      <h2 className="text-l font-semibold mb-4">
        Cumulative data for all charge points from station {selectedStation}
      </h2>
      <ResponsiveBar
        data={data}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        colors={{ scheme: "nivo" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Day",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Power (kW)",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        keys={["value"]}
        labelSkipWidth={12}
        labelSkipHeight={12}
        indexBy={"date"}
      />
    </>
  );
};

export default Chart;
