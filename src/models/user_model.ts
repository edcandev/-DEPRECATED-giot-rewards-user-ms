import {UserType} from "../types/types"

export interface User {
    identifier: number,
    firstname: string,
    lastname: string,
    userType: UserType
    points: number,
    email: string,
    phone: string,
}
