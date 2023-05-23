export const Stats = ({ followers, views, likes }) => {
  return (
    <ul className="profile__stats stats">
      <li className="stats__item">
        <span className="stats__label">Followers</span>
        <span className="stats__quantity">{followers}</span>
      </li>
      <li className="stats__item">
        <span className="stats__label">Views</span>
        <span className="stats__quantity">{views}</span>
      </li>
      <li className="stats__item">
        <span className="stats__label">Likes</span>
        <span className="stats__quantity">{likes}</span>
      </li>
    </ul>
  );
};
