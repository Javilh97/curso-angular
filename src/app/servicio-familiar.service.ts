import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeno?: string;

  setHermanoGrande(hermano: string){
    this.hermanoGrande = hermano;
  }

  getHermanoGrande(): string {
    return this.hermanoGrande || '';
  }

  setHermanoPequeno(hermano: string){
    this.hermanoPequeno = hermano;
  }

  getHermanoPequeno(): string{
    return this.hermanoPequeno || '';
  }

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string{
    return '¿Como está tu hijo?';
  }

  constructor() { }
}
