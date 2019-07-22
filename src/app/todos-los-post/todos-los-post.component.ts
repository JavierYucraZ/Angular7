import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  	this.allRef = firebase.database().ref('allposts').limitToFirst(5);
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
}
