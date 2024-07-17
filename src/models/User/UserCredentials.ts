export default class UserCredentials {
    constructor(
        readonly email: string,
        readonly password: string,
        readonly name?: string,
        readonly last_name?: string,
    ){}
}