import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { CurrencyPipe } from '@angular/common';
//decorador
@Component({
  //nombre del componente
  selector: 'app-padre',
  //elementos del componente, el html y css
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){}

  nombre?: string;
  fecha?: Date = new Date();
  dolar?: number = 1000;

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  //Recibir un mensaje desde un componente hijo
  
  mensajeRecibido!: string;
  
  recibirMensaje($event: string){
    this.mensajeRecibido = $event;

  } 
    

  /* mostrar() {
  Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media.tenor.com/GeeTh2IqzGMAAAAj/nyancat.gif")
      left top
      no-repeat
    `
  });
 */

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || "");
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }


  //valorContador: number = 0;
   //Esta funcion envia un valor hacia el html mediante la llamada desde html con un evento "click"
  //  incrementar() {
  //    this.valorContador++;
  //  }
   //Funcion que envia datos al html
  //  decrementar() {
  //    this.valorContador--;
  //  }
  
  //  mensajePadre = "mensaje desde el padre :D";

}





