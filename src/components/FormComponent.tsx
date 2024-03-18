import React, { useState } from "react";
import StationInput from "./StationInput";
import { SimulationData } from "../pages/Home";

export interface Station {
  numberOfStations: string;
  power: string;
}

interface IFormComponentProps {
  setShowForm: (t: boolean) => void;
  setSimulationData: (data: SimulationData) => void;
}

const FormComponent: React.FC<IFormComponentProps> = ({
  setShowForm,
  setSimulationData,
}) => {
  const [stations, setStations] = useState<Station[]>([
    { numberOfStations: "", power: "" },
  ]);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [multiplier, setMultiplier] = useState<string>("100");
  const [carConsumption, setCarConsumption] = useState<string>("18");

  const addRow = (e: React.MouseEvent) => {
    e.preventDefault();
    setStations([...stations, { numberOfStations: "", power: "" }]);
  };

  const deleteRow = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const updatedStations = stations.filter((_, i) => i !== index);
    setStations(updatedStations);
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Station
  ) => {
    const updatedStations = [...stations];
    updatedStations[index][field] = event.target.value;
    setStations(updatedStations);
  };

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const hasEmptyField = stations.some(
      (station) => !station.numberOfStations || !station.power
    );

    if (hasEmptyField) {
      setErrorMessage("Please fill in all required fields");
      return;
    }
    setErrorMessage("");
    setSimulationData({ stations, multiplier, carConsumption });
    setShowForm(false);
  };

  return (
    <form className="flex flex-col space-y-4">
      <div className="flex gap-40 px-8">
        <label>Stations *</label>
        <label>Power (kW) *</label>
      </div>
      {stations.map((station, index) => (
        <StationInput
          key={index}
          index={index}
          station={station}
          addRow={addRow}
          deleteRow={deleteRow}
          handleInputChange={handleInputChange}
        />
      ))}
      <label className="self-start" htmlFor="multiplier">
        Multiplier (%) *
      </label>
      <input
        type="number"
        id="multiplier"
        placeholder="80"
        className="border border-gray-300 px-3 py-2 rounded-md invalid:border-red-500"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        min="0"
        required
      />
      <label htmlFor="consumption" className="self-start">
        Car Consumption (kWh) *
      </label>
      <input
        id="consumption"
        type="number"
        placeholder="Enter car Consumption"
        className="border border-gray-300 px-3 py-2 rounded-md invalid:border-red-500"
        value={carConsumption}
        onChange={(e) => setCarConsumption(e.target.value)}
        min="0"
        required
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        type="submit"
        onClick={onSubmit}
        className="bg-green-900 text-white px-4 py-2 rounded-md"
      >
        Simulate
      </button>
    </form>
  );
};

export default FormComponent;
