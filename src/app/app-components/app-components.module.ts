import { BuildYourTeamComponent } from './build-your-team/build-your-team.component';
import { ChooseYourPokemonComponent } from './choose-your-pokemon/choose-your-pokemon.component';
import { WhosYourPokemonComponent } from './whos-your-pokemon/whos-your-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { HeaderComponent } from '../shared/components/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    WhosYourPokemonComponent,
    ChooseYourPokemonComponent,
    BuildYourTeamComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AppComponentsModule { }
