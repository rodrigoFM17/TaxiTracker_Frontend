import { GeneralFetchResponse } from "../models/GeneralFetchResponse";
import { GeneralApiResponse } from "../models/GeneralApiResponse";

export const adaptApiToLocalResponse = <T, U>(res: GeneralApiResponse<U>, adapter: (data: U, token?:string) => T):GeneralFetchResponse<T> => {

    if(res.status == "success" && res.token){
        return {
            status: "success",
            data: res.data ? adapter(res.data, res.token) : null,
        }
    } else if (res.status == "success"){
        return {
            status: "success",
            data: res.data ? adapter(res.data) : null
        }
    } else {
        return {
            status: "failed",
            data: null,
            msg: res.msg
        }
    }
}