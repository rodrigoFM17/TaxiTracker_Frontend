import { adaptEndpointToLocalDriver } from "../adapters/Driver/adaptEndpointToLocalDriver";
import { adaptLocalToEndpointDriver } from "../adapters/Driver/adaptLocalToEndpointDriver";
import { adaptApiToLocalResponse } from "../adapters/adaptApiToLocalResponse";
import { Driver } from "../models/Driver/Driver";
import { EndpointDriver } from "../models/Driver/EndpointDriver";
import { GeneralFetchResponse } from "../models/GeneralFetchResponse";
import { apiKitsUrl, deleteMethod, get, post } from "./fetchApi";


export const getDriversByKitId = async(kitId: string): Promise<GeneralFetchResponse<Driver[] | Driver>> => {
    const response = await get(apiKitsUrl, `drivers/${kitId}`)
    console.log(response)
    const adaptedResponse = adaptApiToLocalResponse<Driver | Driver[], EndpointDriver>(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}

export const createDriver = async(kitId: string, driver: Driver): Promise<GeneralFetchResponse<Driver[] | Driver>> => {
    const adaptedDriver = adaptLocalToEndpointDriver(driver)
    console.log(adaptedDriver)
    const response = await post(apiKitsUrl, `drivers/${kitId}`, adaptedDriver)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}

export const deleteDriver = async(driverId: string): Promise<GeneralFetchResponse<Driver | Driver[]>> => {
    const response = await deleteMethod(apiKitsUrl, `drivers/${driverId}`)
    const adaptedResponse = adaptApiToLocalResponse(response, adaptEndpointToLocalDriver)
    return adaptedResponse
}