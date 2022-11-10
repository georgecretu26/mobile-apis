import { useCallback } from "react";

const useVibration = () => {
  const vibrate = useCallback((pattern: number | number[]) => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(pattern);
    }
  }, []);

  return vibrate;
};

export default useVibration;
