import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { navigate } from "wouter/use-browser-location";

export default function ProtectedRoutes ({children}:any) {

    const {user} = useContext(UserContext)

    if(!user.token) 
        navigate("/login")

    return <>
        {children}
    </>

}