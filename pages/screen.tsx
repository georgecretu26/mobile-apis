import Documentation from "../components/Documentation";
import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
import TestedDevice from "../components/TestedDevice";
import useScreenOrientation from "../hooks/use-screen-orientation";

const Screen = () => {
  const { orientation, isSupported } = useScreenOrientation();

  if (!isSupported) return <NotSupported />;

  return (
    <>
      <GoBackButton />
      <>
        <p>
          Screen orientation: <span>{orientation?.type}</span>
        </p>
        <p>
          Screen angle: <span>{orientation?.angle}</span>
        </p>
        <button onClick={() => orientation?.lock(orientation?.type)}>
          lock
        </button>
      </>
      <Documentation
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation",
        ]}
      />
      <TestedDevice
        environments={[{ platform: "None", device: "None", browser: "None" }]}
      />
    </>
  );
};

export default Screen;
