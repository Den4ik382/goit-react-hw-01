import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
// import transactions from "./transactions";
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendList friend={friend} />
            </li>
          );
        })}
      </ul>

      <TransactionHistory />
    </>
  );
}
