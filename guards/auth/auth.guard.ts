import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authservice: AuthService, private _route : Router){}

  canActivate(){
    let isAuthorized = this._authservice.getIsAuthorized();
      if(isAuthorized){

        return true;
      }else{
        this._route.navigate(['/signin']);
        return false;
      }
  }

}
