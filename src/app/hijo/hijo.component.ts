import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

    //Este es la forma de recibir un mensaje desde un componente padre
    // @Input() recibeHijo: string = "";
    //Esta es la forma de enviar un mensaje desde el componente hijo hacia el componente padre    
    @Output() mensajeDesdeHijo = new EventEmitter<string>();

    //Enviar un mensaje desde un componente hijo a un componente padre
    mensaje: string = "";
    enviarMensaje() {
        this.mensajeDesdeHijo.emit(this.mensaje);
        Swal.fire({
          title: "Mensaje Enviado.",
          width: 600,
          padding: "3em",
          color: "#716add",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.tenor.com/GeeTh2IqzGMAAAAj/nyancat.gif")
            left top
            no-repeat
          `
        });
    }
}