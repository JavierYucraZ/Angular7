import { Component, OnInit } from '@angular/core';
import { MyFireService } from '../servicios/myfire.service';
import { NotificationService } from '../servicios/notification.service'

@Component({
  selector: 'app-mis-posts',
  templateUrl: './mis-posts.component.html',
  styleUrls: ['./mis-posts.component.css']
})
export class MisPostsComponent implements OnInit {

  constructor(private myFire : MyFireService, private notifier : NotificationService) { }

  ngOnInit() {
  }

  onFileSelection(event){
  	const fileList : FileList = event.target.files;
  	if (fileList.length>0) {
  		const file : File = fileList[0];
  		this.myFire.uploadFile(file).
  		then(data =>{
  			this.notifier.display('success', 'Se agrego la imagen correctamente');
  		}).catch(err =>{
  			this.notifier.display('error', err.message);
  		});
  	}
  }

}
