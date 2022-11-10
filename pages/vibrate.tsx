import Documentation from "../components/Documentation";
import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
import TestedDevice from "../components/TestedDevice";
import useVibration from "../hooks/use-vibration";

const Vibrate = () => {
  const { vibrate, isSupported } = useVibration();

  if (!isSupported)
    return (
      <>
        <NotSupported />
        <Documentation
          links={[
            "https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API",
          ]}
        />
        <TestedDevice
          environments={[
            { platform: "Android", device: "Samsung S10", browser: "Default" },
          ]}
        />
      </>
    );

  return (
    <div>
      <GoBackButton />
      <h1>Vibration</h1>
      <button onClick={() => vibrate(1000)}>Vibrate 1 sec</button>
      <button onClick={() => vibrate([1000, 500, 1000])}>
        Vibrate 1 sec, 0.5 sec, 1 sec
      </button>
      <Documentation
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API",
        ]}
      />
      <TestedDevice
        environments={[
          { platform: "Android", device: "Samsung S10", browser: "Default" },
        ]}
      />
    </div>
  );
};

export default Vibrate;
