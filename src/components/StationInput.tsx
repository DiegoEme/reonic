import { Station } from "./FormComponent";

interface IStationInput {
  index: number;
  station: Station;
  handleInputChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Station
  ) => void;
  addRow: (e: React.MouseEvent) => void;
  deleteRow: (e: React.MouseEvent, index: number) => void;
}

const StationInput = ({
  index,
  station,
  handleInputChange,
  addRow,
  deleteRow,
}: IStationInput) => {
  return (
    <div className="flex items-center space-x-4" key={index}>
      <span>{index + 1}</span>
      <input
        type="number"
        placeholder="Number of Stations"
        className="border border-gray-300 px-3 py-2 rounded-md invalid:border-red-500"
        value={station.numberOfStations}
        onChange={(e) => handleInputChange(index, e, "numberOfStations")}
        min="0"
        required
      />
      <input
        type="number"
        placeholder="Power"
        className="border border-gray-300 px-3 py-2 rounded-md invalid:border-red-500"
        value={station.power}
        onChange={(e) => handleInputChange(index, e, "power")}
        min="0"
        required
      />
      {index === 0 ? (
        <button
          type="button"
          className="bg-green-500 text-white px-6 py-2 rounded-md"
          onClick={(e) => addRow(e)}
        >
          +
        </button>
      ) : (
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={(e) => deleteRow(e, index)}
        >
          Del
        </button>
      )}
    </div>
  );
};

export default StationInput;
