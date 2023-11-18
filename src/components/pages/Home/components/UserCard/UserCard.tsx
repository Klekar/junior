import { ReactElement } from 'react';
import { Button, Icon } from '@/components/shared';
import User from '@/model/User';
import style from './UserCard.module.css';

const UserCard = ({ user }: { user: User }): ReactElement => {
  const { lng, lat } = user.address.geo;
  return <div className={[style.container].join(' ')}>
    <h3>{user.name}</h3>
    <div><Icon iconName="mail" className="h-4 inline mb-[.125em]" wrapperStyle="inline" />&nbsp;{user.email}</div>
    <div><Icon iconName="call" className="h-4 inline mb-[.125em]" wrapperStyle="inline" />&nbsp;{user.phone}</div>
    <a
      href={`https://mapy.cz/turisticka?source=coor&id=${lng}%2C${lat}&x=${lng}&y=${lat}z=16`}
      target="_blank"
      rel="noreferrer"
      className={style.mapLink}
    >
      <Button variant="secondary" className="!rounded-full">
        <Icon iconName="search" className="h-5 inline" wrapperStyle="inline" /> Locate person
      </Button>
    </a>
  </div>;
};

export default UserCard;
