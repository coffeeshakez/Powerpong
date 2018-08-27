import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  
  team = "test";
  teamName: string;
  messages: string[] = [];

  constructor(private chat: ChatService ) { }


  ngOnInit() {

    this.chat.sendMessage("Hello world");
   
    this.chat.getMessages().subscribe((message: string) =>{
      this.messages.push(message);

      
    })



  }

}
