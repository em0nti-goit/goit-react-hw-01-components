import scss from 'components/Statistics/Statistics.module.scss';

export function setColorClass(percentage) {
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
