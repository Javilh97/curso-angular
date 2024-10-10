import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ConsumoPokeapiService } from '../services/consumo-pokeapi.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeapi',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
  ) {

  }
  ngOnInit(): void {
    
    this.formulario = this.fb.group({
      buscar: ['', Validators.required]
    });
  }
  get name() { return this.formulario.controls['buscar']; }
  
  consultaPokemon() {
    if (this.formulario.valid) {
      const nombre = this.formulario.value.buscar.toLowerCase();
      console.log("nombre", nombre);

      this.consultaApi.obtenerPokemon(nombre).subscribe({
        next: (response) => {
          //console.log(response);
          this.datos = response.name;
          this.imagen = response.sprites.front_default;
          //console.log("imagen ", this.imagen)
        }, error: (error) => {

          console.log("errores: ", error);

        }
      })
    } else {
      this.formulario.markAllAsTouched();
      console.log("Llene el formulario >:v");

    }
  }


  isValidField(field: string){
    const control = this.formulario.get(field);
    return control?.touched && control?.invalid;
  }
}
