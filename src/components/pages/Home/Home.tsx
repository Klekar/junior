import { ReactElement } from 'react';
import { Icon, Button } from '@/components/shared';
import { UserList } from './components';
import useFetchUsers from './hooks/useFetchUsers';
import style from './Home.module.css';

const Home = (): ReactElement => {
  const { fetchUsers, users, isLoading, error } = useFetchUsers();

  return (
    <main className={style.home}>
      <h1 className="inline-block">User list</h1>
      <Button variant="secondary" onClick={fetchUsers} className="float-right h-10" disabled={isLoading}>
        {isLoading
          ? <div className={style.loader} />
          : <Icon iconName="download" className="h-5" />
        }
      </Button>
      {error !== ''
        ? <div>
          Error: {error}
        </div>
        : undefined
      }
      <UserList users={users} />
    </main>
  );
};

export default Home;
