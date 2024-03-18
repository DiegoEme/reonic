import React, { useCallback, useEffect, useState } from "react";
import Chart from "./Chart";
import { week, month } from "../data";
import { Station } from "./FormComponent";
import Card from "./Card";
import DropdownComponent from "./DropdownComponent";

export interface IReportProps {
  simulationData: {
    carConsumption: string;
    multiplier: string;
    stations: Station[];
  };
}

const Report: React.FC<IReportProps> = ({ simulationData }) => {
  const [selectedStation, setSelectedStation] = useState("1");
  const [stationData, setStationData] = useState<Station>({
    numberOfStations: "",
    power: "",
  });
  const [chartData, setChartData] = useState("w");

  const findStationData = useCallback(() => {
    const station = simulationData.stations.find(
      (_, index) => index + 1 === Number(selectedStation)
    );
    if (station) {
      setStationData(station);
    }
  }, [selectedStation, simulationData]);

  useEffect(() => {
    findStationData();
  }, [simulationData, findStationData]);

  const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStation(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <DropdownComponent
        stations={simulationData.stations}
        handleStationChange={handleStationChange}
        selectedStation={selectedStation}
        setChartData={setChartData}
      />
      <div className="flex-wrap flex gap-6 items-center justify-center my-8">
        <Card title="EV Power (kWh)" body={simulationData.carConsumption} />
        <Card title="Charge Points" body={stationData.numberOfStations} />
        <Card title="Station Power (kW)" body={stationData.power} />
        <Card
          title="Total Energy (kW)"
          body={(150 + Math.random() * 500).toFixed().toString()}
        />
      </div>
      <div className="h-[500px] w-[400px] md:w-[600px] lg:w-[800px]">
        <Chart
          data={chartData === "w" ? week() : month()}
          selectedStation={selectedStation}
        />
      </div>
    </div>
  );
};

export default Report;
