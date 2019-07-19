import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular7';


ngOnInit(){
	const firebaseConfig = {
    apiKey: "AIzaSyBfgYiJh40KevbDx0NUTYOrh8wNs91AYws",
    authDomain: "proyectoinstagram-dfd93.firebaseapp.com",
    databaseURL: "https://proyectoinstagram-dfd93.firebaseio.com",
    projectId: "proyectoinstagram-dfd93",
    storageBucket: "gs://proyectoinstagram-dfd93.appspot.com/",
    messagingSenderId: "13635409426",
    appId: "1:13635409426:web:af87f588c9d71a9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

}
