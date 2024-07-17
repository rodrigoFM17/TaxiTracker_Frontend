export class EndpointDriver {
    constructor(
        readonly kit_id: string,
        readonly name: string,
        readonly last_name: string,
        readonly pin: string,
        readonly id?: string,
        readonly file?: string
     ) {}   
 }