import { useState } from 'react';
import User, { isArrayOfUsers } from '@/types/User';

interface IReturnType {
  fetchUsers: () => Promise<void>;
  users: User[];
  isLoading: boolean;
  error: string;
}

export default function useFetchUsers(): IReturnType {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchUsers = async (): Promise<void> => {
    setUsers([]);
    setIsLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.status !== 200) {
        throw new Error('Unexpected status code on HTTP response: ' + response.statusText);
      }

      const data = await response.json();
      if (isArrayOfUsers(data)) {
        setUsers(data);
      } else {
        throw new Error('Received data does not match the required format.');
      }
    } catch (err) {
      console.error(err);
      setError((err as { message: string })?.message ?? 'Could not load Users.');
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchUsers, users, isLoading, error };
}
