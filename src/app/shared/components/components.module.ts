import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { InputsModule } from './inputs/inputs.module';
import { ModalsModule } from './modals/modals.module';
import { HeaderComponent } from './header/header.component';
import { ButtonsModule } from './buttons/buttons.module';



@NgModule({
  declarations: [
    ToastComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ModalsModule,
    ButtonsModule
  ],
  exports: [
    InputsModule,
    ModalsModule,
    ToastComponent,
    HeaderComponent,
    ButtonsModule
  ]
})
export class ComponentsModule { }
