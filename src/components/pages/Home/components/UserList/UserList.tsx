import { ReactElement } from 'react';
import User from '@/types/User';
import { UserCard } from './components';

interface IProps {
  users: Array<User>;
}

const UserList = ({ users }: IProps): ReactElement => {
  if (users.length === 0) {
    return <></>;
  }

  return (
    <div>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
