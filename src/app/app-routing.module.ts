import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-components/home/home.component';
import { WhosYourPokemonComponent } from './app-components/whos-your-pokemon/whos-your-pokemon.component';
import { BuildYourTeamComponent } from './app-components/build-your-team/build-your-team.component';
import { ChooseYourPokemonComponent } from './app-components/choose-your-pokemon/choose-your-pokemon.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: "whos-your-pokemon", component: WhosYourPokemonComponent},
  {path: "choose-your-pokemon", component: ChooseYourPokemonComponent},
  {path: "build-your-team", component: BuildYourTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
