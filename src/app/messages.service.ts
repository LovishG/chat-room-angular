import { Injectable } from '@angular/core';
import { Message } from './messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private allMessages:Message[] =[]

  setValue(_message:string, _name:string, _time:string){
    
    this.allMessages.push({
      message: _message,
      name: _name,
      time: _time
    });
    

  }

  getValue(){
    return this.allMessages;
  }

}
