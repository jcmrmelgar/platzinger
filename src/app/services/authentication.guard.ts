import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import {map} from 'rxjs/operators';
import {Route, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService : AuthenticationService,private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authenticationService.getStatus().pipe(
      map(status =>{
        if (status){
          return true;
        }else{
          this.router.navigate(['login']);
          return false;                  
        }
      })
    );
    }
}
