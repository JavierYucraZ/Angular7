import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../servicios/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public type : string;
  public message : string;

  constructor(private notifier : NotificationService) { 
    this.type = null;
    this.message = null;

    notifier.emmiter.subscribe(
      data=>{
        this.type = data.type;
        this.message = data.message;
        this.reset();
      });
  }

  ngOnInit() {
  }

  reset(){
    setTimeout(()=>{
      this.message = null;
      this.type = null;
    }, 6500);
  }

}
