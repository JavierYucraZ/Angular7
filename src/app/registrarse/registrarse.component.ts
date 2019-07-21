import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyFireService } from '../servicios/myfire.service';
import { NotificationService } from '../servicios/notification.service'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  constructor(private notifier : NotificationService) { 

  }

  ngOnInit() {}

  onSubmit(form : NgForm){
  	const displayname = form.value.displayname;
  	const email = form.value.email;
  	const password = form.value.password;

  	firebase.auth().createUserWithEmailAndPassword(email,password).
  	then(userData=>{
  		userData.user.sendEmailVerification();
  		const message = 'Un correo se envio a x'+email+', revisa tu inbox y sigue los pasos de verificacion. Una vez verificado, inicia sesion en la pagina';
  		this.notifier.display('success', message);
  		return firebase.database().ref('users/' + userData.user.uid).set({
  			displayname : displayname,
  			email : email,
  			uid : userData.user.uid,
  			registrationDate : new Date().toString(),
  		});
  	});
  }

}
