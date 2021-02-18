import { ToastrService } from 'ngx-toastr'
import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthenticationService } from '../_services/authentication.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue
    if (currentUser) {
      return true
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    this.toastr.warning('Você deve fazer login para acessar essas funcionalidades')
    return false
  }
}
