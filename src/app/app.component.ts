import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Message } from './messages.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private msgService: MessagesService){}

  array:any =[];
  serviceValue:Message[]=[];


  pushToArray(name:string): void {
    if(name=='') return alert('no name typed');
    if(this.array.includes(name))
    {
      return alert('same person either already exists or he has now closed his chat');

    }
    let value = <string>document.querySelector('input')?.value;
    this.array.push(value);
  }

  setValuesOfService(eventArgs:any){
    //setting messages service global values which are valid for all components
    this.msgService.setValue(eventArgs._newMsg, eventArgs._name, eventArgs._time);
    
    //getting all values of messages service and storing them in class field
    this.serviceValue = this.msgService.getValue();


    //console.log('services values array: ', this.serviceValue);

  }

}
