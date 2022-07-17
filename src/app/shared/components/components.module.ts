import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ButtonsModule } from './buttons/buttons.module';
import { InputsModule } from './inputs/inputs.module';
import { ModalsModule } from './modals/modals.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ToastComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    InputsModule,
    ModalsModule,
  ],
  exports: [
    ButtonsModule,
    InputsModule,
    ModalsModule,
    ToastComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
