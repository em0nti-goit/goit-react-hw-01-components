import PropsType from 'prop-types';
import scss from './Statistics.module.scss';
import { setColorClass } from 'utils/class-utils';


export const Statistics = ({ stats, title = null }) => {
  return (
    <section className={scss.statistics}>
      {title && <h2 className={scss.title}>{title}</h2>}

      <ul className={scss.list}>
        {stats.map(item => {
          const colorClass = setColorClass(item.percentage);
          return (
            <li key={item.id} className={`${scss.item} ${colorClass}`}>
              <span className={scss.label}>{item.label}</span>
              <span className={scss.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropsType.arrayOf(
    PropsType.shape({
      id: PropsType.string.isRequired,
      label: PropsType.string.isRequired,
      percentage: PropsType.number.isRequired,
    })
  ),
  title: PropsType.string,
};