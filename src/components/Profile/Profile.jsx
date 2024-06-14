import css from "./Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.block}>
      <div className={css.profileCard}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.spanName}>Followers</span>
          <span className={css.spanName}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanName}>Views</span>
          <span className={css.spanName}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanName}>Likes</span>
          <span className={css.spanName}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
