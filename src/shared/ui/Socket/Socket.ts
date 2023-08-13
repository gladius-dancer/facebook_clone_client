import { io } from 'socket.io-client';
import { CURRENT_USER_KEY } from 'shared/const/localstorage';

class Socket {
    socket: any;

    constructor() {
        this.socket = io('http://localhost:7001');
    }

    connect() {
        this.socket.emit('newUser', JSON.parse(localStorage.getItem(CURRENT_USER_KEY))?.id);
    }

    sendNotification() {
        this.socket.emit(
            'sendNotification',
            {
                senderId: JSON.parse(localStorage.getItem(CURRENT_USER_KEY))?.id,
                receiverId: '64d66b2969e28f52c108b48b',
                type: 'friendRequest',
            },
        );
    }

    sendMessage() {
        this.socket.emit('sendText', { senderName: 'Rustem', receiverName: 'Salamat', text: 'Hello' });
    }
}

export default new Socket();
