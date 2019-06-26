import {Component} from '@angular/core'

@Component({
selector:'temp-comp',
templateUrl:'./template.component.html'

})

export class TemplateFormComponent{

    title:string='Template Form Demo'

    public saveStudent(data:any){
        alert(JSON.stringify(data));
        console.log(data);
    }
}