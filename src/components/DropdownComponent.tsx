import { Station } from "./FormComponent";

interface IDropdownComponent {
  selectedStation: string;
  handleStationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  stations: Station[];
  setChartData: (data: string) => void;
}

const DropdownComponent: React.FC<IDropdownComponent> = ({
  selectedStation,
  handleStationChange,
  stations,
  setChartData,
}) => {
  return (
    <div className="flex gap-4 w-full">
      <select
        id="station-select"
        className="block w-full p-2 border border-gray-300 rounded-md"
        value={selectedStation}
        onChange={handleStationChange}
      >
        {stations.map((_, index) => (
          <option key={index} value={index + 1}>
            Station {index + 1}
          </option>
        ))}
      </select>
      <div className="flex flex-row gap-2">
        <button
          className="bg-green-500 hover:bg-green-400"
          onClick={() => setChartData("w")}
        >
          Weekly
        </button>
        <button
          className="bg-green-500 hover:bg-green-400"
          onClick={() => setChartData("m")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default DropdownComponent;
