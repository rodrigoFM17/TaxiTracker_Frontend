import { adaptEndpointToLocalKit } from "../adapters/Kit/adaptEndpointToLocalKit"
import { adaptLocalToEndpointKit } from "../adapters/Kit/adaptLocalToEndpointKit"
import { GeneralFetchResponse } from "../models/GeneralFetchResponse"
import { EndpointKit } from "../models/Kit/EndpointKit"
import { Kit } from "../models/Kit/Kit"
import { apiKitsUrl, get, post, put } from "./fetchApi"
import { adaptApiToLocalResponse } from "../adapters/adaptApiToLocalResponse"
import { GeneralApiResponse } from "../models/GeneralApiResponse"



export const getKits = async (userId:string): Promise<GeneralFetchResponse<Kit | Kit[]>> => {
    const res = await get(apiKitsUrl,`kits/${userId}`) as GeneralApiResponse<EndpointKit>
    console.log(res)
    const adaptedResponse = adaptApiToLocalResponse(res, adaptEndpointToLocalKit)
    console.log(adaptedResponse)
    return adaptedResponse
}

export const addKit = async (kit:Kit): Promise<GeneralFetchResponse<Kit | Kit[]>> => {
    const adaptedKit = adaptLocalToEndpointKit(kit)
    console.log(adaptedKit)
    const res = await post(apiKitsUrl,"kits", adaptedKit) as GeneralApiResponse<EndpointKit>
    return adaptApiToLocalResponse<Kit | Kit[], EndpointKit>(res, adaptEndpointToLocalKit)
}

export const updateKit = async (kitId: string, updatedKit: Kit): Promise<GeneralFetchResponse<Kit | Kit[]>> => {
    console.log(updateKit)
    const response = await put(apiKitsUrl, `kits/${kitId}`, updatedKit)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalKit)
    return adaptedResponse
}