import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { AuthState } from "workbench/app/store/auth/auth.state";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.store.selectSnapshot(AuthState.user);
    if (user) {
      return true;
    } else {
      this.router.navigateByUrl("signin");
      return false;
    }
  }
}
