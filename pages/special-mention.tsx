import React from "react";
import GoBackButton from "../components/GoBackButton";
import Documentation from "../components/Documentation";

const SpecialMention = () => {
  return (
    <>
      <GoBackButton />
      <h1>Special mention</h1>
      <Documentation
        title="Network"
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API",
        ]}
      />
      <Documentation
        title="Background Task API"
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API",
        ]}
      />
      <Documentation
        title="Barcode API"
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API",
        ]}
      />
      <Documentation
        title="Clipboard API"
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",
        ]}
      />
      <Documentation
        title="Device Orientation"
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation",
        ]}
      />
      <Documentation
        title="Sensor API"
        links={["https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs"]}
      />
    </>
  );
};

export default SpecialMention;
