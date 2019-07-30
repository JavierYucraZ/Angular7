import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';
import { MyFireService } from '../servicios/myfire.service';
import { UserService } from '../servicios/user.service'; 
import { NotificationService } from '../servicios/notification.service' 
import { Router } from '@angular/router';

import 'firebase/auth';
import 'firebase/database';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {


constructor(private notifier : NotificationService, 
    private myfire: MyFireService, 
    private userService : UserService,
    private router : Router) { }

  ngOnInit() {

  }

  onSubmit(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().signInWithEmailAndPassword(email, password).
    then(userData=>{
      if (userData.user.emailVerified) {
        return this.myfire.getUserFromDatabase(userData.user.uid);
      }else{
        const message = "Por favor verfica tu email";
        this.notifier.display('error', message);
        firebase.auth().signOut();
      }
    }).then(()=>{
      var database = firebase.auth().currentUser;
      if (database) {
        this.userService.set(database);
        this.router.navigateByUrl('/TodosLosPosts');
      }
    })
    .catch(err =>{
      this.notifier.display('error', err.message);
    });
}
}
