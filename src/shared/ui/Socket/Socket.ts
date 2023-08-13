import { io } from 'socket.io-client';
import { CURRENT_USER_KEY } from 'shared/const/localstorage';

export class Socket {
    socket: any;

    constructor() {
        this.socket = io('http://localhost:7001');
    }

    connect() {
        this.socket.emit('newUser', JSON.parse(localStorage.getItem(CURRENT_USER_KEY))?.id);
    }

    sendMessage() {
        this.socket.emit('sendText', { senderName: 'Rustem', receiverName: 'Salamat', text: 'Hello' });
    }
}
