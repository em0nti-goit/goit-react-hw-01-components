import PropsType from 'prop-types';
import scss from './Statistics.module.scss';

export const Statistics = ({ stats, title = null }) => {
  return (
    <section className={scss.statistics}>
      {title ? <h2 className={scss.title}>{title}</h2> : null}

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

function setColorClass(percentage) {
  const classes = [
    scss.item_0,
    scss.item_20,
    scss.item_40,
    scss.item_60,
    scss.item_80,
  ];
  let index = Math.floor(percentage / 20);
  index = index >= 0 && index <= 5 ? index : 0; // Ensures the index is within the array bounds
  return classes[index];
}
