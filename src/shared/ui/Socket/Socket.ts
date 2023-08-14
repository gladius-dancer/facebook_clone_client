import { io } from 'socket.io-client';

class Socket {
    socket: any;

    constructor() {
        this.socket = io('http://localhost:7001');
    }
}

export default new Socket();
