import { City, Country, State } from "../signup/types"

export type User = {
    ID: number,
    Username: string,
    Email: string,
    CityID: number,
    CountryID: number,
    StateID: number,
    Country: Country,
    City: City,
    State: State
}