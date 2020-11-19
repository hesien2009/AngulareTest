import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceSentence'
})
export class ReduceSentencePipe implements PipeTransform {

  transform(value: string,Limit? :number,...args: unknown[]): unknown {
    if(!value) return null;
    Limit=(Limit) ? Limit : 20;
    return value.substr(0,Limit)+'.......';
  }

}
