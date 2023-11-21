import { ReactElement } from 'react';
import { Button, Icon } from '@/components/shared';
import IUser from '@/model/IUser';
import style from './UserCard.module.css';

/*
inteface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps):
*/
const UserCard = ({ user }: { user: IUser }): ReactElement => {
  // const { name, email, phone, address: { geo: { lat, lng }} } = user;
  const { lng, lat } = user.address.geo;
  return <div className={[style.container].join(' ')}>
    <h3>{user.name}</h3>
    {/*
      tyto dva divy mají stejný className => použití třídy a ne inline zápisu
      používání custom hodnot vede k případné nejednotnosti designu
    */}
    <div><Icon iconName="mail" className="h-4 inline mb-[.125em]" wrapperStyle="inline" />&nbsp;{user.email}</div>
    <div><Icon iconName="call" className="h-4 inline mb-[.125em]" wrapperStyle="inline" />&nbsp;{user.phone}</div>
    {/* Button v odkazu je pro přístupnost peklo. Tohle je špatně. */}
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
