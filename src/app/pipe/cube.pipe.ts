import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'cube'
})

export class CubePipe implements PipeTransform {
    transform(value: number, addInp:number) {
        // Transfromation logic
        return addInp!= undefined ?(value * value * value)+addInp:(value * value * value) ;

    }
}