import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";

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

  if (!isSupported) return <NotSupported />;

  return <button onClick={handleShare}>Share</button>;
};

export default WebShare;
