import { useCallback, useState } from "react";

const useVibration = () => {
  const [isSupported, setIsSupported] = useState(false);

  const vibrate = useCallback((pattern: number | number[]) => {
    if (window.navigator.vibrate) {
      setIsSupported(true);
      window.navigator.vibrate(pattern);
    }
  }, []);

  return { vibrate, isSupported };
};

export default useVibration;
