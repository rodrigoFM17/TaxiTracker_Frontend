import { Driver } from "../../models/Driver/Driver";
import { EndpointDriver } from "../../models/Driver/EndpointDriver";

export const adaptLocalToEndpointDriver = (driver: Driver):EndpointDriver => {
    if(driver.id && driver.pin) {
        return {
            id: driver.id,
            file: driver.image,
            kit_id: driver.kitId,
            last_name: driver.lastName,
            name: driver.name,
            pin: driver.pin
        
        }
    } else {
        return {
            kit_id: driver.kitId,
            last_name: driver.lastName,
            name: driver.name,
            pin: driver.pin
        }
    }
}
