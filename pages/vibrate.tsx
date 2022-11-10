import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
import useVibration from "../hooks/use-vibration";

const Vibrate = () => {
  const { vibrate, isSupported } = useVibration();

  if (!isSupported) return <NotSupported />;

  return (
    <div>
      <GoBackButton />
      <h1>Vibration</h1>
      <button onClick={() => vibrate(1000)}>Vibrate 1 sec</button>
      <button onClick={() => vibrate([1000, 500, 1000])}>
        Vibrate 1 sec, 0.5 sec, 1 sec
      </button>
    </div>
  );
};

export default Vibrate;
