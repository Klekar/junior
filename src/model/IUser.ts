// interface je vhodnější pro složité datové struktury, jako třeba funkce nebo třídy
// pro takové jednoduché věci bych spíše použil type
export default interface IUser {
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
}
