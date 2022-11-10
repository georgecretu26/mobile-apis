import GoBackButton from "../components/GoBackButton";
import NotSupported from "../components/IsSupported";
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
    </>
  );
};

export default Notification;
