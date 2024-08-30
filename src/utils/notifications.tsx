import useNotificationStore from "stores/useNotificationStore";
export function notify(newNotification: {
  type?: string;
  message: string;
  description?: string;
  txid?: number;
}) {
  const { notifications, set: setNotificationStore } =
    useNotificationStore.getState();

  setNotificationStore((state: { notifications: any[] }) => {
    state.notifications = [
      ...notifications,
      {
        type: "success",
        ...newNotification,
      },
    ];
  });
}
