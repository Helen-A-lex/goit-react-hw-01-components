import user from '../user.json';
import data from "../data.json";
import friends from "../friends.json";
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistic';
import { Profile } from './Profile/Profile';
import { FriendsList } from './FriendsList/FriendsList';
export const App = () => {
  return (
    <Layout>
    <GlobalStyle/>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
    <Statistics title="Upload stats" stats={data}/>
      {/* <Statistics stats={data} /> */}
      
    <FriendsList friends={friends} />
   </Layout>
  );
};
