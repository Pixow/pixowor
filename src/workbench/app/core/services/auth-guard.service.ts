import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Store } from "@ngxs/store";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
    // const user = this.store.selectSnapshot();
    // if (user) {
    //   return true;
    // } else {
    //   this.router.navigateByUrl("signin");
    //   return false;
    // }
  }
}
