import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ConsumoPokeapiService } from '../services/consumo-pokeapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokeapi',
  standalone: true,
  imports: [],
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.css'
})
export class PokeapiComponent implements OnInit {

  formulario!: FormGroup;

  datos!: any;
  imagen: any;
  constructor(
    private consultaApi: ConsumoPokeapiService,
    private fb: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.consultaPokemon();
    //this.formulario = this.fb.group()
  }

  consultaPokemon(){
    this.consultaApi.obtenerPokemon().subscribe({
      next: (response) => {
        console.log(response);
        this.datos = response.name;
        this.imagen = response.sprites.front_default;
        //console.log("imagen ", this.imagen)
      }, error: (error) => {

        console.log("errores: ", error);
        
      }
    })
  }

}
