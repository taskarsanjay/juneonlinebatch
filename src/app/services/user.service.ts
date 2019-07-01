import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()

export class UserService {

    constructor(private http: HttpClient) {
    }

    public allUsers: any
    public GetAllUser() {

        console.log('I am inside Service Begin')
        this.http.get('https://reqres.in/api/users?page=2')
            .subscribe(success => { this.allUsers = success },
                error => { this.allUsers = error }
            )
            console.log('I am inside Service end')
            return this.allUsers
    }

}