import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageValidation'
})
export class ImageValidationPipe implements PipeTransform {

  transform(url: string): Promise<string> {
    return new Promise<string>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve('https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png');
      img.src = url;
    });
  }
}
