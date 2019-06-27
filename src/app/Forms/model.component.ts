import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'model-comp',
    templateUrl: './model.component.html',
    styleUrls: ['./model.component.scss']
})

export class ModelFormComponent {

    title: string = 'Model/Reactive Form Demo'
    public employeeModel: FormGroup

    constructor() {
        this.employeeModel = new FormGroup({
            City: new FormControl('Pune'),
            Name: new FormControl('',[Validators.required, Validators.maxLength(5)]),
            Email: new FormControl('', [Validators.email, Validators.required]),
            Phone: new FormControl()
        })
    }

    public SaveEmployee(data){

        alert(JSON.stringify(data))
    }


}