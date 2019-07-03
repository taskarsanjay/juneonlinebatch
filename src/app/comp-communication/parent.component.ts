import {Component, ViewChild} from '@angular/core'
import { ViewChildComponent } from './viewchild.component';
@Component({
selector:'parent-comp',
templateUrl:'./parent.component.html'

})

export class ParentComponent {
@ViewChild(ViewChildComponent,{static: false}) myChildObj:ViewChildComponent
title:string='Parent component'
public myCity='Nasik'

public getData:any;
public GetData(data){
    this.getData=data;
console.log('Recive data'+JSON.stringify(data))
}

public myMessage='I am from Parent component'
public GetViewChildInfo(){
this.myMessage=this.myChildObj.Message // child to parent

}

public SendDataToViewChildComponent(){

    this.myChildObj.Message=this.myMessage // parent to child

}

}