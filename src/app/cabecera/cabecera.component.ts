import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	public isLoggedIn : boolean;

  constructor() { 
  	this.isLoggedIn = false;
  }

  ngOnInit() {
  	
  	firebase.auth().onAuthStateChanged(userData =>{
  		if (userData && userData.emailVerified) {
  			this.isLoggedIn = true;
  		}else{
  			this.isLoggedIn = false;
  		}
  	});

  }

}
