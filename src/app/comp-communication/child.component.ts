import {Component, Input, Output, EventEmitter} from '@angular/core'
@Component({
selector:'child-comp',
templateUrl:'./child.component.html'
})

export class ChildComponent{

title:string='Child component'
@Input() city:string='Pune'
@Output() sendData:any=new EventEmitter();

public SendDataToParent(){
let dataonj={
    name:'sanjay', city:'pune'
}
console.log('Send data'+JSON.stringify(dataonj))
    this.sendData.emit(dataonj)

}

}