import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service';

@Component({
    selector: 'user-comp',
    templateUrl: './user.componet.html',
    providers: [UserService]
})

export class UserComponent implements OnInit {
    ngOnInit(): void {
        this.GetAllUsersInfo()
    }
    title = 'HttpClient Service Demo'
    public myUserInfo: any
    constructor(private usrService: UserService) {

    }

    public GetAllUsersInfo() {
        console.log('I am inside component')
        this.myUserInfo = this.usrService.GetAllUser()
    }

    userData11;
    public SaveMyUser(data) {
        // let data = {
        //     name: 'Sachin',
        //     job: 'Software Engineer',
        //     city:'Pune'
        // }
        console.log(JSON.stringify(data))
        this.userData11 = this.usrService.SaveUser(data);
        console.log("Response"+ JSON.stringify(this.userData11))

    }


}