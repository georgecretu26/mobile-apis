import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
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
    </>
  );
};

export default Screen;
