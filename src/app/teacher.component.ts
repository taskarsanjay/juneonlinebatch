import {Component} from '@angular/core'

// Decorator - attaches behaviour to your class
@Component({
selector:'tech-comp', // place holder for component
template:`<h1> Hello Friends</h1>
<h2> Pune</h2>
<hr>
<h1>{{title}}</h1>
{{amount}}
{{name}}
<input type="text" value={{amount}}>
`})

export class TecherComponent{
// public variablename:datatype -> string/ number/ boolean / any
public title:string='Welcome to Assimilate Technologies, Pune'
public amount:number=100.20
public name='AT Pune'
}