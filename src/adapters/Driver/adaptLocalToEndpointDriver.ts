import { Driver } from "../../models/Driver/Driver";
import { EndpointDriver } from "../../models/Driver/EndpointDriver";

export const adaptLocalToEndpointDriver = (driver: Driver):EndpointDriver => {
    if(driver.id && driver.pin) {
        return {
            id: driver.id,
            image: driver.image,
            last_name: driver.lastName,
            name: driver.name,
            pin: driver.pin
        
        }
    } else {
        return {
            last_name: driver.lastName,
            name: driver.name,
            pin: driver.pin,
            image: driver.image
        }
    }
}
