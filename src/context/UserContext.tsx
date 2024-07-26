import { createContext, useState } from "react";
import User from "../models/User/User";

const UserContext = createContext<any>({})

export function UserContextProvider({children}:any){

    const [user, setUser] = useState<User>({
        id: "",
        email: "",
        lastName: "",
        name: "",
    })

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>

}

export default UserContext