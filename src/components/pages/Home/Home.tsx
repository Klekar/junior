import { ReactElement, useState } from 'react';
import { Icon, Button } from '@/components/shared';
import IUser from '@/model/IUser';
import { UserCard } from './components';
import style from './Home.module.css';

const Home = (): ReactElement => {
  // osobně preferuji genetika Array<IUser>
  const [users, setUsers] = useState<IUser[]>([]);

  // fetchujeme uživatele, ne úkoly
  // lépe asynchronní funkci, pak se vyhnete promise chainingu
  // nějak mi cybí info, že se to nahrává, co když to bude dlouho trvat?
  // uživatel bude klikat jak zběsilej
  const fetchTodos = (): void => {
    setUsers([]);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // a jakou máte jistotu, že získaná data jsou ve tvaru Array<IUser>?
        // a co chybové HTTP stavy (404)?
        setUsers(data);
      })
      .catch((error) => {
        // ale fuj, alerty! Tohle uživateli nic neřekne a vývojář nevidí celou chybu
        alert(error?.statusCode ?? 'Could not load resources.');
      });
  };

  return (
    <main className={style.home}>
      <h1 className="inline-block">User list</h1>
      <Button variant="secondary" onClick={fetchTodos} className="float-right">
        <Icon iconName="download" className="h-5" />
      </Button>
      {/*
        Pokud nepřijdou zádní uživatelé, zůstane tady div.
        Spíš by si to měla ošetřit komponenta např. UserList,
        která by buď nezobrazila, nebo ukázala karty
      */}
      <div>
        {users.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
    </main>
  );
};

export default Home;
