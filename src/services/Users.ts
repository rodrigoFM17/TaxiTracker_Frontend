import { apiUsersUrl, post } from "./fetchApi"
import UserCredentials from "../models/User/UserCredentials"
import User from "../models/User/User"
import { EndpointUser } from "../models/User/EndpointUser"
import { adaptApiToLocalResponse } from "../adapters/adaptApiToLocalResponse"
import { adaptEndpointToLocalUser } from "../adapters/User/adaptEndpointToLocalUser"
import { GeneralFetchResponse } from "../models/GeneralFetchResponse"
import { GeneralApiResponse } from "../models/GeneralApiResponse"

export const loginUser = async(credentials: UserCredentials):Promise<GeneralFetchResponse<User>> => {
    const res = await post(apiUsersUrl, "auth",credentials) as GeneralApiResponse<EndpointUser>
    const adaptedResponse = adaptApiToLocalResponse<User, EndpointUser>(res, adaptEndpointToLocalUser)
    return adaptedResponse
}

export const registerUser = async(credentials: UserCredentials): Promise<GeneralFetchResponse<User>> => {  
    console.log(credentials)
    const res = await post(apiUsersUrl, "users", credentials) as GeneralApiResponse<EndpointUser>
    const adaptedResponse = adaptApiToLocalResponse<User, EndpointUser>(res, adaptEndpointToLocalUser)
    return adaptedResponse
}