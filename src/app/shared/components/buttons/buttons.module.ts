import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionsBtnComponent } from './functions-btn/functions-btn.component';



@NgModule({
  declarations: [
    FunctionsBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FunctionsBtnComponent
  ]
})
export class ButtonsModule { }
