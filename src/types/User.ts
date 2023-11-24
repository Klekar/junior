type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
};

function isUser(o: Partial<User>): o is User {
  return (
    typeof o.id === 'number' &&
    typeof o.name === 'string' &&
    typeof o.email === 'string' &&
    typeof o.phone === 'string' &&
    typeof o?.address?.geo.lat === 'string' &&
    typeof o?.address?.geo.lng === 'string'
  );
}

export function isArrayOfUsers(o: Partial<Array<User>>): o is Array<User> {
  if (!Array.isArray(o)) {
    return false;
  }
  return o.every((item) => {
    return isUser(item as Partial<User>);
  });
}

export default User;
