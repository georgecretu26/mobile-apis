import { useEffect, useState } from "react";

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientation>();
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSupported(typeof window !== "undefined");
    }

    const updateOrientation = () => {
      setOrientation(screen.orientation);
    };

    window.addEventListener("orientationchange", updateOrientation);
    updateOrientation();
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  return { orientation, isSupported };
};

export default useScreenOrientation;
