import friends from "../../friends.json";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList() {
  return (
    <ul className={css.friendItem}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendList}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
