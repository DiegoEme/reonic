console.log("Simulation Result", {
  teoric: 220,
  simulation: simulate({chargePoints: 60,days: 365}),
});

const EV_POWER = 18; //kWh
const STATION_ENERGY = 11; //kW
const HOUR = 60; //1 hour = 60 minutes
const ONE_DAY = 24; // 24 hours
const ONE_QUARTER = 4; // 4 cuarters (4*15 minutes)

const probabilityPerHour = [
  0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 2.83, 2.83, 5.66, 5.66, 5.66,
  7.55, 7.55, 7.55, 10.38, 10.38, 10.38, 4.72, 4.72, 4.72, 0.94, 0.94,
];

const chargingDemands = {
  0: 34.31, 
  5: 4.9,
  10: 9.8,
  20: 11.76,
  30: 8.82, 
  50: 11.76, 
  100: 10.78, 
  200: 4.9, 
  300: 2.84,
};

function simulate({chargePoints, days}) {
  let totalEnergy = 0;

  for (let s = 0; s < chargePoints; s++) {
    for (let i = 0; i < days; i++) {
      const energy = calculateEnergyPerstation();
      totalEnergy += energy;
    }
  }

  return totalEnergy;
}

function calculateEnergyPerstation() {
  let totalEnergyConsumed = 0;
  const demandInKm = calculateChargingDemand();
  const totalMinutesSpentCharging = calculateTimeCharging(demandInKm);
  if (allocateVehicleInStation(totalMinutesSpentCharging)) {
    totalEnergyConsumed = (EV_POWER / HOUR) * totalMinutesSpentCharging; // kW 
  }

  return totalEnergyConsumed / ONE_DAY / ONE_QUARTER;
}

function calculateChargingDemand() {
  const randomNum = Math.random() * 100;

  let cumulativeProbability = 0;
  let distance = 0;

  for (const [km, probability] of Object.entries(chargingDemands)) {
    cumulativeProbability += probability;
    if (randomNum <= cumulativeProbability) {
      distance = km;
      break;
    }
  }

  return Number(distance);
}

function calculateTimeCharging(km) {
  const timeInMinutesPerKm = ((EV_POWER / STATION_ENERGY) * 60) / 1000;

  return timeInMinutesPerKm * km;
}

function allocateVehicleInStation(
  totalMinutesSpentCharging,
) {
  let cumulativeProbability = 0;
  let isCarInStation = false;

  for (const [hour, probability] of probabilityPerHour.entries()) {
    const hourEnd = hour + totalMinutesSpentCharging / 60;

    cumulativeProbability += probability;
    isCarInStation = Math.random() * 100 <= cumulativeProbability;

    if (isCarInStation) {
      return true;
    }
  }
  return false;
}
