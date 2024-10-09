import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path: 'pokeapi', component: PokeapiComponent},
  {path: 'carusel', component: CarouselComponent},
  {path: '', redirectTo: 'pokeapi', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
