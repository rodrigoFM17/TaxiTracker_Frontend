import { EndpointUser } from "../../models/User/EndpointUser";
import User from "../../models/User/User";

export const adaptEndpointToLocalUser = (user: EndpointUser, token?:string):User => ({
    name: user.name,
    lastName: user.last_name,
    email: user.email,
    id: user.id,
    token: token
})