import { Driver } from "../../models/Driver/Driver";
import { EndpointDriver } from "../../models/Driver/EndpointDriver";

export const adaptEndpointToLocalDriver = (driver: EndpointDriver | EndpointDriver[]): Driver | Driver[] => {
    if(Array.isArray(driver))
        return driver.map(singleDriver => ({
            id: singleDriver.id,
            kitId: singleDriver.kit_id,
            lastName: singleDriver.last_name,
            name: singleDriver.name,
            pin: singleDriver.pin,
            image: singleDriver.file
    }))
    else return {
        id: driver.id,
        kitId: driver.kit_id,
        lastName: driver.last_name,
        name: driver.name,
        pin: driver.pin,
        image: driver.file
    }
}