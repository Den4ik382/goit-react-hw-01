import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendList({ avatar, name, isOnline }) {
  const statusClasses = clsx(isOnline ? css.online : css.offline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
