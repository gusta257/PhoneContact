import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
  
    transform(value: any, arg: any): any {
      //console.log("value",value)
      //console.log("arg",arg)
      const result = [];
      if(value == null){
       return result.push()
      }
      for(const person of value){
          
        if(person.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
           result.push(person);
        };
      };
      return result;
    }
     
  }
