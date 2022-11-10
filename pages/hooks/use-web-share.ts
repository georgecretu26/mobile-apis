import { useCallback, useEffect, useState } from "react";

const useWebShare = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported(navigator.share !== undefined);
  }, []);

  const share = useCallback(
    async (data: ShareData) => {
      if (!isSupported) {
        return;
      }

      await navigator.share(data);
    },
    [isSupported]
  );

  return { isSupported, share };
};

export default useWebShare;
