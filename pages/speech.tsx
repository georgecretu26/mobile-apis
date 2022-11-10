import GoBackButton from "../components/GoBackButton";
import React, { useState } from "react";
import useSpeechSynthesis from "../hooks/use-speech-syntesis";
import NotSupported from "../components/IsSupported";

const Speak = () => {
  const { speak, isSupported } = useSpeechSynthesis();
  const [text, setText] = useState("Hello World");

  const handleSpeak = () => {
    speak(text);
  };

  if (!isSupported) return <NotSupported />;

  return (
    <>
      <GoBackButton />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSpeak}>Speak</button>
    </>
  );
};

export default Speak;
