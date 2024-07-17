
interface Data<T>{
    data: T | [] |null
}

export class GeneralApiResponse<T> implements Data<T> {
    constructor(
        readonly status: "success" | "error",
        readonly data: T |null ,
        readonly msg: string,
        readonly token?:string
    ){}

}