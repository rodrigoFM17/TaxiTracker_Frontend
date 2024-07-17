import { EndpointKit } from "../../models/Kit/EndpointKit";
import { Kit } from "../../models/Kit/Kit";


export const adaptEndpointToLocalKit = (kit: EndpointKit | EndpointKit[]):Kit | Kit[]=> {
    if(Array.isArray(kit)){
        const auxArray = kit.map(singleKit => ({
            name: singleKit.name,
            unity: singleKit.unit_code,
            userId: singleKit.user_id,
            id: singleKit.id
        }))
        return auxArray
    } else return {
        name: kit.name,
        unity: kit.unit_code,
        userId: kit.user_id,
        id: kit.id
    }
}