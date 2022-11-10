import Documentation from "../components/Documentation";
import GoBackButton from "../components/GoBackButton";
import TestedDevice from "../components/TestedDevice";
import useBatteryStatus from "../hooks/use-battery";

const Battery = () => {
  const battery = useBatteryStatus();

  return (
    <div>
      <GoBackButton />
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
      <Documentation
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API",
        ]}
      />
      <TestedDevice
        environments={[
          {
            platform: "Apple",
            device: "MacBook, iPhone",
            browser: "Chrome, Safari",
          },
        ]}
      />
    </div>
  );
};

export default Battery;
