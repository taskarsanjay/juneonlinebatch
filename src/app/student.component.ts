import { Component } from '@angular/core' // Dependency
import { StudentService } from './services/student.service'
// Component/ Directive/ Injectable/ NgModule/ Pipe

// Decorater -> which attach behaviour to class
@Component({
        selector: 'stud-comp',  // place holder for this component
        templateUrl: './student.component.html',
       // providers: [StudentService] // Local registration
})

export class StudentComponent {
        constructor(private sts: StudentService) {

        }      

        public myStudentDetail: any
        public GetStudentData() {
                this.myStudentDetail = this.sts.GetAllStudent();
        }

        public userDetails:any;

        public GetUserInfo(){

                this.userDetails=this.sts.GetUserDetails();
        }



}