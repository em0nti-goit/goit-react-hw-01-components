import PropTypes from 'prop-types';
import scss from './Profile.module.scss';
import { Stats } from 'components/Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div key={tag} className={scss.profile}>
      <div className={`${scss.profile__description} ${scss.description}`}>
        <img
          src={avatar}
          alt="User avatar"
          className={scss.description__avatar}
          width="100"
          height="100"
        />
        <div className={scss.description__info}>
          <p className={scss.description__title}>{username}</p>
          <p
            className={`${scss.description__text} ${scss.description__textTag}`}
          >
            {tag}
          </p>
          <p className={scss.description__text}>{location}</p>
        </div>
      </div>
      <Stats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
