import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value.trim() === '') {
      return 'assets/images/tim_logo.png';
    }
    if (value==='as.jpg'){
      return 'assets/images/Riadh.jpg';
    }
    return value;
  }
}
