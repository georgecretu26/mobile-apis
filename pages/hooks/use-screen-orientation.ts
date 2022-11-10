import { useEffect, useState } from "react";

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientation>();

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(screen.orientation);
    };

    window.addEventListener("orientationchange", updateOrientation);
    updateOrientation();
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
