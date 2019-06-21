import { Component } from '@angular/core' // Dependency
// Component/ Directive/ Injectable/ NgModule/ Pipe

// Decorater -> which attach behaviour to class
@Component({
        selector: 'stud-comp',  // place holder for this component
        templateUrl: './student.component.html'
})

export class StudentComponent {

        public myColor = { color: 'Yellow' }
        public amount = 150000;
        public isHidden: boolean = true
        public myInvestment = { color: 'back' }
        public data = [1, 2, 3, 4, 5, 6];
        public student:any=[
                {name:'sanjay', city:'Pune', rollno:1},
                {name:'Amol', city:'Nasik', rollno:2},
                {name:'Aniket', city:'Pune', rollno:3},
                {name:'Sachin', city:'Mumbai', rollno:4}
        ]
        public ValidateMyInvestment() {

                if (this.amount >= 150000) {

                        this.myInvestment = { color: 'green' }
                } else {
                        this.myInvestment = { color: 'red' }
                }
        }
        public toggle() {
                this.isHidden = !this.isHidden
        }

}