import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFireService } from '../servicios/myfire.service';
import * as firebase from 'firebase';
import _ from 'lodash';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-siguiendo',
  templateUrl: './siguiendo.component.html',
  styleUrls: ['./siguiendo.component.css']
})
export class SiguiendoComponent implements OnInit, OnDestroy {
public refArray : any = [];
  public postList : any =[];

  constructor(private myFire : MyFireService) { }

  ngOnInit() {

  	const uid = firebase.auth().currentUser.uid;
  	const followRef = firebase.database().ref('follow').child(uid);

  	followRef.once('value', data =>{
  		const uidListOfOtherUsers = _.keys(data.val());
  		this.getPostsFromOtherUsers(uidListOfOtherUsers);
  	});
  }


  getPostsFromOtherUsers(uidList){
  	for(let count = 0; count < uidList.length; count++){
  		this.refArray[count] = this.myFire.getUserPostsRef(uidList[count]);
      this.refArray[count].on('child_added', data =>{
        this.postList.push({
          key : data.key,
          data : data.val()
        });
      });
  	}
  }

  ngOnDestroy(){
    _.forEach(this.refArray, ref =>{
      if (ref && typeof(ref)=='object') {
        ref.off();
      }
    });
  }

}
