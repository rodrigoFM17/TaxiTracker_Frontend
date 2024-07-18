import { adaptEndpointToLocalDriver } from "../adapters/Driver/adaptEndpointToLocalDriver";
import { adaptLocalToEndpointDriver } from "../adapters/Driver/adaptLocalToEndpointDriver";
import { adaptApiToLocalResponse } from "../adapters/adaptApiToLocalResponse";
import { Driver } from "../models/Driver/Driver";
import { EndpointDriver } from "../models/Driver/EndpointDriver";
import { GeneralFetchResponse } from "../models/GeneralFetchResponse";
import { apiKitsUrl, deleteMethod, get, patchWithoutJSON, postWithoutJSON } from "./fetchApi";


export const getDriversByKitId = async(kitId: string): Promise<GeneralFetchResponse<Driver[] | Driver>> => {
    const response = await get(apiKitsUrl, `drivers/kit/${kitId}`)
    console.log(response)
    const adaptedResponse = adaptApiToLocalResponse<Driver | Driver[], EndpointDriver>(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}

export const getDriverById = async(driverId: string): Promise<GeneralFetchResponse<Driver | Driver[]>> => {
    const response = await get(apiKitsUrl, `drivers/${driverId}`)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}

export const createDriver = async(driver: FormData): Promise<GeneralFetchResponse<Driver[] | Driver>> => {
    const response = await postWithoutJSON(apiKitsUrl, `drivers`, driver)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}

export const updateDriver = async(driver: FormData, driverId:string): Promise<GeneralFetchResponse<Driver[] | Driver>> => {
    const response = await patchWithoutJSON(apiKitsUrl, `drivers/${driverId}`, driver)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}

export const deleteDriver = async(driverId: string): Promise<GeneralFetchResponse<Driver | Driver[]>> => {
    const response = await deleteMethod(apiKitsUrl, `drivers/${driverId}`)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}