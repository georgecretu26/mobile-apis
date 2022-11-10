import Link from "next/link";
import { useEffect } from "react";
import useWebShare from "./hooks/use-web-share";

const WebShare = () => {
  const { isSupported, share } = useWebShare();

  const handleShare = () => {
    share({
      title: "Web Share API",
      text: "Check out this cool Web Share API",
      url: "https://web.dev/web-share/",
    });
  };

  useEffect(() => {
    console.log(isSupported);
    console.log(navigator);
  }, [isSupported]);

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