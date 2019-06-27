import { Component } from '@angular/core'

@Component({
    selector: 'doc-comp',
    templateUrl: './doctor.component.html'
})

export class DoctorComponent {
    public title = 'My Template driven form Demo'

    public saveInfo(data: any) {
        alert(JSON.stringify(data))
    }
}