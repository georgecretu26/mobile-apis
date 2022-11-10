import Documentation from "../components/Documentation";
import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
import TestedDevice from "../components/TestedDevice";
import useNotification from "../hooks/use-notification";

const notificationObj = {
  title: "Notification",
  options: {
    body: "This is a notification",
    icon: "/favicon.ico",
  },
};

const Notification = () => {
  const { isSupported, fireNotification } = useNotification(
    notificationObj.title,
    notificationObj.options
  );

  const handleNotification = () => {
    fireNotification();
  };

  if (!isSupported) return <NotSupported />;

  return (
    <>
      <GoBackButton />
      <button onClick={handleNotification}>Notify</button>
      <Documentation
        links={[
          "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API",
        ]}
      />
      <TestedDevice
        environments={[
          { platform: "Apple", device: "Desktop", browser: "Safari" },
        ]}
      />
    </>
  );
};

export default Notification;
