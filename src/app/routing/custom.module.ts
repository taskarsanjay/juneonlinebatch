import { NgModule } from '@angular/core'
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';

export const childRoute: Routes = [
    { path: '', redirectTo: 'contact' },
    { path: 'contact', component: ContactComponent },

]

@NgModule({
    declarations: [ContactComponent],
    imports: [RouterModule.forChild(childRoute)],
    providers: [],
    exports: [ContactComponent]
})

 export  class CustomModule {


}

export class XYZModule
{


}