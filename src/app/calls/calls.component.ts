import { HelpdeskService } from './../helpdesk/helpdesk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  constructor(private helpdeskService : HelpdeskService) { }

  calls : string[];
  defaultOneWayBinding : string = "me@home.com";
  modelBoundValue : string  = "Test";
 
  ngOnInit() {
  
      this.calls = this.helpdeskService.getCalls();
  }

  itemSelected(i){
  
    alert("You selected item " + i);
  }
  onKeyUp($event){
    if($event.keyCode === 13){

        alert($event.target.value);
    }
  }

  onKeyUpFiltered(email){

          alert(email);
  }

  onKeuUpWithModelBinding(){
   alert(this.modelBoundValue);
  }

  

}
