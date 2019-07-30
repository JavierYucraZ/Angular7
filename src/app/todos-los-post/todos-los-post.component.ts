import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFireService } from '../servicios/myfire.service';
import { NotificationService } from '../servicios/notification.service';
import _ from 'lodash';
import * as firebase from 'firebase';
import 'firebase/database';

@Component({
  selector: 'app-todos-los-post',
  templateUrl: './todos-los-post.component.html',
  styleUrls: ['./todos-los-post.component.css']
})
export class TodosLosPostComponent implements OnInit, OnDestroy{
	public all : any = [];
	public loadMoreRef : any;
	public allRef : any;

  constructor(private myFire : MyFireService, private notifier : NotificationService) { }

  ngOnInit() {

  	this.allRef = firebase.database().ref('allposts').limitToFirst(20);
  	this.allRef.on('child_added', data =>{
  		this.all.push({
  			key: data.key,
  			data : data.val()
  		});
  	});

  }

  ngOnDestroy(){
    
  	this.allRef.off();
  	if (this.loadMoreRef) {
  		this.loadMoreRef.off();
  	}
  }

onFavoritesClicked(imageData){
    this.myFire.handleFavoriteClicked(imageData).
    then(data => {
      this.notifier.display('success', 'Imagen agregada a Favoritos');
    }).catch(err => {
      this.notifier.display('error', 'Error al agregar a favoritos');
    });
  }

  onFollowClicked(imageData){
    this.myFire.followUser(imageData.uploadedBy).
    then(()=>{
      this.notifier.display('success', 'Siguiendo a '+ imageData.uploadedBy.email+ "!!!");
    }).
    catch(err =>{
      this.notifier.display('error', err);
    });
  }
}
