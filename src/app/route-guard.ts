import { CanActivate } from '@angular/router';

export class RouteGuard implements CanActivate{

	canActivate(){
		//Si el usuario esta logeado, devuelve un true, caso contrario devuelve falso
		return false;
	}	
}