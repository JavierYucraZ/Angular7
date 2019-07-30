import _ from 'lodash';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
	public favoritesList : any = [];
  constructor() { }

  ngOnInit() {

  	const uid = firebase.auth().currentUser.uid;
  	const favRef = firebase.database().ref('favorites').child(uid);

  	favRef.once('value').then(snapshot =>{
  		const favoritesObj = snapshot.val();
  		this.favoritesList = _.values(favoritesObj);
  	});

  }

}
