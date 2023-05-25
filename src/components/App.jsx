import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from './Profile/Profiles.jsx';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics stats={data} title="Upload stats" />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
