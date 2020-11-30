import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/ChatMessageDto';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.css']
})
export class LivechatComponent implements OnInit  {

  constructor(public webSocketService:WebSocketService) { }

  
    ngOnInit(): void {
      this.webSocketService.openWebSocket();
    }

    ngOnDestroy(): void {
      this.webSocketService.closeWebSocket();
    }
    sendMessage(sendForm:NgForm)
    {
      const chatMessageDto=new ChatMessageDto(sendForm.value.user,sendForm.value.message);
      // console.log(sendForm.value)
      this.webSocketService.sendMessage(chatMessageDto);
      sendForm.controls.message.reset(); 
    }
  
  }

  



