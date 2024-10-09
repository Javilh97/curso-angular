import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';
import { CommonModule } from '@angular/common';
import { PerformanceDashboardComponentComponent } from "./performance-dashboard-component/performance-dashboard-component.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CarouselComponent } from './carousel/carousel.component';
import { MapaComponent } from './mapa/mapa.component';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    HermanoComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    PerformanceDashboardComponentComponent,
    CarouselComponent,
    MapaComponent,
    PokeapiComponent,
    HttpClientModule
    
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
