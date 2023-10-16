
export type User = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    country: string,
    state: string,
    city: string
}

export type Country = {
    ID: number,
    Name: string
}

export type State = {
   CountryID: number,
   ID: number,
   Name: string
}

export type City = {
    CountryID: number,
    StateID: number,
    ID: number,
    Name: string
}