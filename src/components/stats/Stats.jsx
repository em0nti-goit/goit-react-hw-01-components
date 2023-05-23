import scss from './stats.module.scss';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={scss.stats}>
      <li className={scss.stats__item}>
        <span className={scss.stats__label}>Followers</span>
        <span className={scss.stats__quantity}>{followers}</span>
      </li>
      <li className={scss.stats__item}>
        <span className={scss.stats__label}>Views</span>
        <span className={scss.stats__quantity}>{views}</span>
      </li>
      <li className={scss.stats__item}>
        <span className={scss.stats__label}>Likes</span>
        <span className={scss.stats__quantity}>{likes}</span>
      </li>
    </ul>
  );
};
