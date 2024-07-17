
export default class User {
    constructor(
        readonly id: string,
        readonly name:string,
        readonly lastName: string,
        readonly email: string,
        readonly token?: string
    ){}
}