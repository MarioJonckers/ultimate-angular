export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  baggage: string[] | null
}
