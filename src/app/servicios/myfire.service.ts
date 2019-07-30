import {UserService} from './user.service';
import {Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class MyFireService {

	constructor(private user : UserService) {}
	
	getUserFromDatabase(uid){
		const ref = firebase.database().ref('users/'+uid);
		return ref.once('value').
		then(snapshot => snapshot.val()); 
	}

	randomName(){
		let text ="image";
		const posible="0123456789";
		for (let i = 0; i < 5; i++) {
			text += posible.charAt(Math.floor(Math.random()*posible.length));
		}
		return text;
	}

	uploadFile(file){
		const fileName = this.randomName();
		const fileRef = firebase.storage().ref().child('image/'+fileName);
		fileRef.put(file);
		const uploadTask = fileRef.put(file);

		return new Promise((resolve, reject) => {
			uploadTask.on('state_changed', snapshot => {
		}, error=>{
			reject(error)
		}, ()=>{
			const url = "https://firebasestorage.googleapis.com/v0/b/proyectoinstagram-dfd93.appspot.com/o/image%2F"+fileName+"?alt=media&token=bdb267c9-05d2-4776-9531-f3354991bc07";
			resolve({fileName, url});
		});
		});
		
	} 

	handleImageUpload(data){
		const user = this.user.getProfile();
		const newPersonalPostKey = firebase.database().ref().child('mypost').push().key;
		const personalPostDetails = {
			fileUrl : data.url,
			name : data.fileName,
			creationDate : new Date().toString()
		};
		const allPostKey = firebase.database().ref('allposts').push().key;
		const allPostDetails = {
			fileUrl : data.url,
			name : data.fileName,
			creationDate : new Date().toString(),
			uploadedBy : user
		};

		const imageDetails={
			fileUrl : data.url,
			name : data.fileName,
			creationDate : new Date().toString(),
			uploadedBy : user,
			favoritesCount : 0
		};
		
		const updates = {};
		updates['/myposts/' + user.uid + "/" + newPersonalPostKey] = personalPostDetails;
		updates['/allposts/'+ allPostKey] = allPostDetails;
		updates['/images/'+data.fileName] = imageDetails;
		return firebase.database().ref().update(updates);
	}

	getUserPostsRef(uid){
		return firebase.database().ref('myposts').child(uid);
	}

	handleFavoriteClicked(imageData){
		const uid = firebase.auth().currentUser.uid;
		const updates ={};
		updates['/images/' + imageData.name + '/oldFavoritesCount'] = imageData.favoritesCount;
		updates['/images/' + imageData.name + '/favoritesCount'] = imageData.favoritesCount+1;
		updates['/favorites/' + uid + "/" + imageData.name] = imageData;
		return firebase.database().ref().update(updates);
	}

	followUser(uploadedByUser){
		const uid = firebase.auth().currentUser.uid;
		const updates = {};
		updates['/follow/'+uid+"/"+uploadedByUser.uid]= true;
		return firebase.database().ref().update(updates);
	}


	
}