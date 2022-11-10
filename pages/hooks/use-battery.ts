import { useEffect, useState } from "react";

const useBatteryStatus = () => {
  const [battery, setBattery] = useState({
    level: 0,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
  });

  const handleChange = ({
    target: { level, charging, chargingTime, dischargingTime },
  }: any) => {
    setBattery({ level, charging, chargingTime, dischargingTime });
  };

  useEffect(() => {
    const battery = navigator.getBattery().then((battery: any) => {
      battery.addEventListener("levelchange", handleChange);
      battery.addEventListener("chargingchange", handleChange);
      handleChange({ target: battery });
    });
  }, []);

  return battery;
};

export default useBatteryStatus;
