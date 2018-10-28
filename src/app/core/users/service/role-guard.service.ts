import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    const token = JSON.parse(localStorage.getItem('user'))[0]['token'];
   
    if (
      !this.auth.isAuthenticated() || 
      token !== "admin"
      
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
