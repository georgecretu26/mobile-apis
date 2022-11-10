import Link from "next/link";
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

  return (
    <>
      <Link href="/">Go Home</Link>
      {!isSupported && <p>API not supported</p>}
      <button onClick={handleNotification}>Notify</button>
    </>
  );
};

export default Notification;
