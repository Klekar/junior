type User = {
  id: number
  name: string
  email: string
  phone: string
  address: {
    geo: {
      lat: number
      lng: number
    }
  }
};

export default User;
