import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
  })
  export class SortPipe implements PipeTransform {
  
    transform(value: any, arg: any): any {
        const sortfField = arg[0];
        const direction = arg[1];
        let multi = 1;
        console.log("value es",value)
        console.log("arg es",arg
        )
        if(value == 0){
            return value
        }
        if (direction === 'desc'){
            multi = -1;
        }

        value.sort((a: any, b: any) => {
            console.log("Comparando",a[sortfField],"con",b[sortfField])
            if(a[sortfField] < b[sortfField] ){
                return -1 * multi;
            }
            else if(a[sortfField] > b[sortfField]){
                return 1 * multi;
            }
            else{
                return 0;
            }
        }
        );
        return value
    }
    
     
  }
  