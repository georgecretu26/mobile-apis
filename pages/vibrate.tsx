import Link from "next/link";
import { useEffect } from "react";
import useVibration from "./hooks/use-vibration";

const Vibrate = () => {
  const vibrate = useVibration();

  useEffect(() => {
    vibrate(1000);
  }, []);

  useEffect(() => {
    console.log(window.navigator);
    console.log(window.navigator.vibrate);
  }, []);

  return (
    <div>
      <Link href="/">Go Home</Link>
      <h1>Vibration</h1>
      <button onClick={() => vibrate(1000)}>Vibrate 1 sec</button>
      <button onClick={() => vibrate([1000, 500, 1000])}>
        Vibrate 1 sec, 0.5 sec, 1 sec
      </button>
    </div>
  );
};

export default Vibrate;
