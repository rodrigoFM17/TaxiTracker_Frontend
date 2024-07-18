import { Driver } from "../../models/Driver/Driver";
import { EndpointDriver } from "../../models/Driver/EndpointDriver";

export const adaptEndpointToLocalDriver = (driver: EndpointDriver | EndpointDriver[]): Driver | Driver[] => {
    if(Array.isArray(driver))
        return driver.map(singleDriver => ({
            id: singleDriver.id,
            lastName: singleDriver.last_name,
            name: singleDriver.name,
            pin: singleDriver.pin,
            image: singleDriver.image
    }))
    else return {
        id: driver.id,
        lastName: driver.last_name,
        name: driver.name,
        pin: driver.pin,
        image: driver.image
    }
}