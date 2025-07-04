import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

// The AuthGuardService implements the CanActivate interface, which is used to control access to routes in Angular applications.
// It checks whether the user is logged in by checking the session storage for a specific key.

// The provideIn: 'root' option allows the service to be available throughout the application without needing to provide it in a specific module.
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    // The canActivate method is called by the Angular router to determine if the route can be activated.
    // It takes two parameters: route and state, which represent the current route and the router state respectively.
    // The route contains information about the route being activated, such as its parameters and data.

    constructor(private router: Router) {}
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(sessionStorage.getItem('loggedIn') === 'yes') {
            return true;
        }
        // return false; // If the user is not logged in, the route cannot be activated.
        // return false;
        this.router.navigate(['/login']);
        return false;
    }
}

// Like the AuthGuardService, you can create other guards such as CanDeactivate, Resolve, and CanLoad to control access to routes based on different conditions.

// CanDeactivate guards are used to prevent navigation away from a route if certain conditions are not met.
// For example, you can use a CanDeactivate guard to prompt the user to save changes before leaving a form.