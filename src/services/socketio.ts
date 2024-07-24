import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://taxitracker-ws-server.freemyip.com';

export const socket = io(URL, {
    autoConnect: false
});