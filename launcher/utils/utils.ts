import { Notification } from "electron";

export interface INotify {
  title: string;
  body: string;
  icon: string;
  delay: number;
}

export function notifySend({ title, body, icon, delay }: INotify) {
  const notify = new Notification({
    title,
    body,
    icon,
  });

  if (delay) {
    setTimeout(() => {
      notify.show();
    }, delay);
  } else {
    notify.show();
  }
}
