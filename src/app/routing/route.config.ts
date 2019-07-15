import {Routes} from '@angular/router'
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { ChildRouterComponent } from './childroute.component';
import { RouteGaurdService } from './routegaurd.service';

export const myRoute:Routes=[
{path:'', component:HomeComponent},
{path:'contact', loadChildren:'./custom.module#CustomModule'},
{path:'about', component:AboutComponent, children:[
    {path:'vision', component:ChildRouterComponent},
    {path:'Goal', component:ChildRouterComponent}
]
], canActivateChild:[RouteGaurdService], canActivate:[RouteGaurdService]}
