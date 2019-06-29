import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
// collegeService
@Injectable()

export class StudentService{

    constructor(private http:HttpClient){


    }
    public data:any=[
        {name:'Sachin', subject:'Angular'},
        {name:'Swati', subject:'Java'},
        {name:'Pravin', subject:'.Net'},
        {name:'Prakash', subject:'.Net'},
    ]

    public GetAllStudent(){

        return this.data;
    }
 public userInfo:any;
    public GetUserDetails(){
        this.http.get('https://reqres.in/api/users').subscribe(res=>{ this.userInfo= res},
            err=>{this.userInfo=err});
            return this.userInfo;

    }
}