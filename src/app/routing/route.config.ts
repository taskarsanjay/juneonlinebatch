import {Routes} from '@angular/router'
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { ChildRouterComponent } from './childroute.component';

export const myRoute:Routes=[
{path:'', component:HomeComponent},
{path:'contact', component:ContactComponent},
{path:'about', component:AboutComponent, children:[
    {path:'vision', component:ChildRouterComponent}
]}
]