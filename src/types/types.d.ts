export type UserType = 'student' | 'professor';


interface User {
    identifier: number,
    firstname: string,
    lastname: string,
    userType: UserType,
}