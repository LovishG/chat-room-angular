import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Message } from '../messages.interface';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @Input('name') name = '';

  @Input('allMessages') msgs : Message[] =[];

  @Output('message-sent') message = new EventEmitter();
  
  isCanceled = false;

  class='self'

  time:string = '';

  
  msgSend(msg:string,name:string){

    if(!msg) return;

    let time = new Date().toLocaleTimeString();
    // this.msgService.setValue(msg, name, time);
    //let allMsgs = this.msgService.getValue();
    //console.log(allMsgs);
    //this.msgs.push(msg);
    this.time = time;
    this.message.emit({_newMsg: msg, _name:name, _time:time});
    

  }

  onClickCancel(){
    this.isCanceled = !this.isCanceled;
  }
}


