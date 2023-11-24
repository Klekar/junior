import { ReactElement } from 'react';
import { Icon } from '@/components/shared';
import IUser from '@/model/IUser';
import style from './UserCard.module.css';

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps): ReactElement => {
  const { name, email, phone, address: { geo: { lat, lng } } } = user;
  return <div className={style.container}>
    <h3>{name}</h3>
    <div><Icon iconName="mail" className={style.inlineIcon} wrapperStyle="inline" />&nbsp;{email}</div>
    <div><Icon iconName="call" className={style.inlineIcon} wrapperStyle="inline" />&nbsp;{phone}</div>
    <a
      href={`https://mapy.cz/turisticka?source=coor&id=${lng}%2C${lat}&x=${lng}&y=${lat}z=16`}
      target="_blank"
      rel="noreferrer"
      className={style.mapLink}
    >
      <Icon iconName="search" className="h-5 inline" wrapperStyle="inline" /> Locate person
    </a>
  </div>;
};

export default UserCard;
