
interface Data<T> {
    data: T | null
}

export class GeneralFetchResponse<T> implements Data<T> {
    constructor(
        readonly status: "success" | "failed",
        readonly data: T | null,
        readonly msg?: string, 
    ){}
}