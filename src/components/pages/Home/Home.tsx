import { ReactElement, useState } from 'react';
import { Icon, Button } from '@/components/shared';
import IUser from '@/model/User';
import UserCard from './components/UserCard/UserCard';
import style from './Home.module.css';

const Home = (): ReactElement => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchTodos = (): void => {
    setUsers([]);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        alert(error?.statusCode ?? 'Could not load resources.');
      });
  };

  return (
    <main className={style.home}>
      <h1 className="inline-block">User list</h1>
      <Button variant="secondary" onClick={fetchTodos} className="float-right">
        <Icon iconName="download" className="h-5" />
      </Button>
      <div>
        {users.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
    </main>
  );
};

export default Home;
