import Link from "next/link";
import useBatteryStatus from "./hooks/use-battery";

const Battery = () => {
  const battery = useBatteryStatus();

  return (
    <div>
      <Link href="/">Go Home</Link>
      <h1>Battery</h1>
      <p>Battery level: {battery.level}</p>
      {battery.charging ? (
        <>
          <p>Battery charging: Yes</p>
          <p>Charging time: {battery.chargingTime} sec</p>
        </>
      ) : (
        <>
          <p>Battery charging: No</p>
          <p>Discharging time: {battery.dischargingTime} sec</p>
        </>
      )}
    </div>
  );
};

export default Battery;
