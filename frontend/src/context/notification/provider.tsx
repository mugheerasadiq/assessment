import React from "react";
import { notification } from "antd";
import { NotificationContext } from "./context";

type NotificationType = "success" | "info" | "warning" | "error";

export const NotificationProvider= ({ children }: any) => {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message,
      description,
    });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
