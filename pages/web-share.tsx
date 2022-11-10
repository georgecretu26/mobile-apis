import Documentation from "../components/Documentation";
import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
import TestedDevice from "../components/TestedDevice";

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

  return (
    <>
      <GoBackButton />
      <button onClick={handleShare}>Share</button>
      <Documentation
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share",
        ]}
      />
      <TestedDevice
        environments={[
          { platform: "Apple", device: "iPhone", browser: "Safari" },
        ]}
      />
    </>
  );
};

export default WebShare;
