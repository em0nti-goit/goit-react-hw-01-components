import user from 'data/user.json';
import data from 'data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics stats={data} title="Upload stats" />
      <Statistics stats={data} />
    </>
  );
};
