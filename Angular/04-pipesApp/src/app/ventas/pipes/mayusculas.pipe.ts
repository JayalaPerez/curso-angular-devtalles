import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas',
    standalone: true
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: string, enMayusculas: boolean = true ): string {
        
        //Existen dos maneras de realizarlo, la primera es esta
    //     if ( enMayusculas ){
    //         return valor.toUpperCase();
    //     } else {
    //         return valor.toLowerCase();
    //     }

    // La segunda es esta 
    return ( enMayusculas )
        ? valor.toUpperCase()
        : valor.toLowerCase();
    }
}

