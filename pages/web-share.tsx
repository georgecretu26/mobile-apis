import Link from "next/link";
import { useEffect } from "react";
import useWebShare from "../hooks/use-web-share";

const WebShare = () => {
  const { isSupported, share } = useWebShare();

  const handleShare = () => {
    share({
      title: "Achievement unlocked",
      text: "Won 1 bet, check my profile",
      url: "https://google.com",
    });
  };

  return (
    <>
      <Link href="/">Go Home</Link>
      {!isSupported ? (
        <p>API not supported</p>
      ) : (
        <button onClick={handleShare}>Share</button>
      )}
    </>
  );
};

export default WebShare;
