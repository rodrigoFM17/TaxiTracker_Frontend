import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
export const WS_URL = 'wss://taxitracker-ws-server.freemyip.com';

// export const socket = io(WS_URL, {
//     autoConnect: false
// });

///// intento de otra manera

let socket = null

export const connectSocket = (token:string, kitId: string) => {
    return socket = io(WS_URL, {
        autoConnect: false,
        auth: {
            token,
            kitId
        }
    })
}