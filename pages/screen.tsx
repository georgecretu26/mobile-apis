import Link from "next/link";
import { useEffect } from "react";
import useScreenOrientation from "../hooks/use-screen-orientation";

const Screen = () => {
  const { orientation, isSupported } = useScreenOrientation();

  useEffect(() => {
    console.log(orientation);
  }, [orientation]);

  return (
    <>
      <Link href="/">Go Home</Link>
      <>
        {!isSupported && <p>API not supported</p>}
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
