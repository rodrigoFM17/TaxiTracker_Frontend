import { EndpointKit } from "../../models/Kit/EndpointKit"
import { Kit } from "../../models/Kit/Kit"

export const adaptLocalToEndpointKit = ({ name, unity, userId, id }:Kit):EndpointKit => (
    id ? 
    {
        name,
        unit_code: unity,
        user_id: userId,
        id,
    }
    :
    {
        name,
        unit_code: unity,
        user_id: userId
    }
)
