import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

	public displayname:string;
	public email:string;
	public pass:string;

  constructor() { }

  ngOnInit() {

  		firebase.auth().createUserWithEmailAndPassword(this.email, this.pass);
  }

}
