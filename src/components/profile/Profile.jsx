import { Stats } from '../stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="profile__description description">
        <img
          src={avatar}
          alt="User avatar"
          className="description__avatar"
          width="100"
          height="100"
        />
        <div className="description__info">
          <p className="description__title">{username}</p>
          <p className="description__text description__text--tag">{tag}</p>
          <p className="description__text">{location}</p>
        </div>
      </div>
      <Stats {...stats} />
    </div>
  );
};
