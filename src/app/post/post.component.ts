import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/database';

@Component({
  selector: 'app-compartir',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	
	@Input() imageName : string;
	@Input() displayPostedBy : boolean = true;
 	public defaultImage : string = "http://via.placeholder.com/150x150";
 	public imageData : any = {};

  constructor() { }

  ngOnInit() {

  	firebase.database().ref('images').child(this.imageName).once('value').
  	then(snapshot => {
  		this.imageData = snapshot.val();
  		this.defaultImage = this.imageData.fileUrl;
  	})
  }

}
