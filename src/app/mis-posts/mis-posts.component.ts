import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFireService } from '../servicios/myfire.service';
import { NotificationService } from '../servicios/notification.service'
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


@Component({
  selector: 'app-mis-posts',
  templateUrl: './mis-posts.component.html',
  styleUrls: ['./mis-posts.component.css']
})
export class MisPostsComponent implements OnInit, OnDestroy {
  public personalPostRef : any;
  public postLists : any = [];

  constructor(private myFire : MyFireService, private notifier : NotificationService) { }

  ngOnInit() {

    const uid = firebase.auth().currentUser.uid;
    this.personalPostRef = this.myFire.getUserPostsRef(uid);
    this.personalPostRef.on('child_added', data =>{
      this.postLists.push({
        key : data.key,
        data : data.val()
      });
      
    });

  }

  onFileSelection(event){
    const fileList : FileList = event.target.files;
    if (fileList.length>0) {
      const file : File = fileList[0];
      this.myFire.uploadFile(file).
      then(data =>{
        this.notifier.display('success', 'Se agrego la imagen correctamente');
        this.myFire.handleImageUpload(data);
      }).catch(err =>{
        this.notifier.display('error', err.message);
      });
    }
  }

  ngOnDestroy(){
    this.personalPostRef.off();
  }

}
