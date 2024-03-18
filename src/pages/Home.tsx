import { useState } from "react";
import FormComponent from "../components/FormComponent";
import Report from "../components/Report";
import { Station } from "../components/FormComponent";

export type SimulationData = {
  carConsumption: string;
  multiplier: string;
  stations: Station[];
};

const initialState: SimulationData = {
  carConsumption: "18",
  multiplier: "10",
  stations: [{ numberOfStations: "1", power: "18" }],
};

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [simulationData, setSimulationData] =
    useState<SimulationData>(initialState);
  return (
    <>
      {showForm ? (
        <FormComponent
          setShowForm={setShowForm}
          setSimulationData={setSimulationData}
        />
      ) : (
        <Report simulationData={simulationData} />
      )}
    </>
  );
};

export default Home;
