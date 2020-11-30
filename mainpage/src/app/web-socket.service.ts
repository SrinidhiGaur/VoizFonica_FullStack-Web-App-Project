import { Injectable } from '@angular/core';
import { ChatMessageDto } from './ChatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket:WebSocket;
  chatMessages:ChatMessageDto[]=[];
  

  constructor() { }
  public openWebSocket() {
    this.webSocket = new WebSocket("ws://localhost:4322/chat");
    this.webSocket.onopen=(event) =>{
      console.log('Open: ',event)

    };
    this.webSocket.onmessage=(event) =>{
      const ChatMessageDto=JSON.parse(event.data);
      this.chatMessages.push(ChatMessageDto)

    };
    this.webSocket.onclose=(event) =>{
      console.log('Close: ',event)

    };
  }
  public sendMessage(chatMessageDto:ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }
  public closeWebSocket(){
    this.webSocket.close();
  }
}
