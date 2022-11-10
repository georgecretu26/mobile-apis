import { useCallback, useEffect, useState } from "react";

const useSpeechSynthesis = () => {
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported("speechSynthesis" in window);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported) {
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      setUtterance(utterance);
      speechSynthesis.speak(utterance);
    },
    [isSupported]
  );

  return { isSupported, speak, utterance };
};

export default useSpeechSynthesis;
