import {Component, OnInit} from '@angular/core'
import { UserService } from './user.service';

@Component({
    selector:'user-comp',
    templateUrl:'./user.componet.html',
    providers:[UserService]
})

export class UserComponent implements OnInit{
    ngOnInit(): void {
       this.GetAllUsersInfo()
    }
title='HttpClient Service Demo'
public myUserInfo:any
constructor(private usrService:UserService){

}

public GetAllUsersInfo(){
    console.log('I am inside component')
    this.myUserInfo=this.usrService.GetAllUser()
}



}