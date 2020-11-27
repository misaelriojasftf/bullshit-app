import { Logger } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';

@WebSocketGateway({ transports: ['websocket'] })
export class RedGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private logger: Logger = new Logger("Realtime");
    @WebSocketServer() server;


    users: number = 0;

    constructor() {

    }

    async afterInit(server) {
        this.logger.log('service initialized');
    }


    async handleConnection(client) {

        this.logger.log('');
        // A client has connected
        this.users++;

        // Notify connected clients of current users
        client.emit('users', this.users);

    }

    async handleDisconnect(client) {

        // A client has disconnected
        this.users--;

        // Notify connected clients of current users
        client.emit('users', this.users);

    }

    @SubscribeMessage('red')
    async onChat(client, message) {
        client.broadcast.emit('red', message);
    }

}