import { useEffect, useState } from "react";

export const useNotification = (
  title: string,
  options: NotificationOptions
) => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported("Notification" in window);
  }, []);

  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return { isSupported, fireNotification };
};
export default useNotification;
