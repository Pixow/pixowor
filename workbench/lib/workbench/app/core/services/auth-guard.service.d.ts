import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Store } from "@ngxs/store";
export declare class AuthGuardService implements CanActivate {
    private router;
    private store;
    constructor(router: Router, store: Store);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
