import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild } from '@angular/router'

@Injectable()

export class RouteGaurdService implements CanActivate,CanActivateChild {

    canActivate() {
        // we add business logic to validate user/ autherization
        return confirm('Are you want to access this component?');
    }
    canActivateChild(){

        return confirm('Are you want to access child component?');;
    }



}