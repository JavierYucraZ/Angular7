import * as firebase from 'firebase/app';
import 'firebase/storage';

export class MyFireService {
	
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


		return new Promise((resolve, reject)=>{
			uploadTask.on('state_changed', snapshot=>{
		}, error=>{
			reject(error)
		}, ()=>{
			const fileUrl = uploadTask.snapshot.downloadURL;
			resolve({fileName, fileUrl});
		});
		});
		
	} 

	constructor() {}

	
}