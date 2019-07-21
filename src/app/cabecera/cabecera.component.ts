import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	public isLoggedIn : boolean;
  public displayname : string;
  public uid : string;
  public email : string;
  

  constructor(private router : Router, private userService : UserService) { 
  	this.isLoggedIn = false;}


  ngOnInit() {

    this.userService.statusService.subscribe(userData =>{
      if (userData) {
        this.displayname = userData.displayname;
        this.email = userData.email;
        this.uid = userData.uid;
      }
      else{
        this.displayname = null;
        this.email = null;
        this.uid = null;
      }
    });

    firebase.auth().onAuthStateChanged(userData =>{
      if (userData && userData.emailVerified) {
        this.isLoggedIn = true;
        const user = this.userService.getProfile();
        if (user && user.email) {
          this.displayname = user.displayname;
          this.email = user.email;
          this.uid = user.uid;
        }
        this.router.navigateByUrl('/MisPost');
      }else{
        this.isLoggedIn = false;

      }
    });
  }

  onLogout(){
    firebase.auth().signOut().
    then(()=>{
      this.userService.destroy();
      this.isLoggedIn = false;
    })
  }

}
