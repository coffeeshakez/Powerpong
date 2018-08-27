import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

export class ChatService {
    private url = 'http://localhost:5000';
    private socket;    

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this.socket.emit('message', message);
    }
    
    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('message', (message) => {
                observer.next(message);
            });
        });
    }

}