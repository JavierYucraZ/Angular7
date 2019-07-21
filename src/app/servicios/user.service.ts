import { EventEmitter } from '@angular/core'

export class UserService {

	public statusService : any = new EventEmitter<any>();
	
	constructor() {

	}

	set(userFromDatabase){
		localStorage.setItem('user', JSON.stringify(userFromDatabase));
		this.statusService.emit(userFromDatabase);
	}

	destroy(){
		localStorage.removeItem('user');
		this.statusService.emit(null);
	}

	getProfile(){
		const user = localStorage.getItem('user');
		return JSON.parse(user);
	}
}