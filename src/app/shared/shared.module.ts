import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageValidationPipe } from './pipes/image-validation.pipe';



@NgModule({
  declarations: [ImageValidationPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImageValidationPipe
  ]
})
export class SharedModule { }
