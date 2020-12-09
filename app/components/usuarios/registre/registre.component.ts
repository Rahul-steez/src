import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {


  newUsuario: Usuario = null;


  @Output() characterEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(itemForm: any): void {

    // Guardamos los valores del formulario en un personaje nuevo
    this.newUsuario = new Usuario(itemForm.controls.nom.value,
                                      itemForm.controls.cognom.value,
                                      itemForm.controls.edat.value,
                                      itemForm.controls.foto.value,
                                      itemForm.controls.descripcion.value,
                                      itemForm.controls.correu.value,
                                      itemForm.controls.contrasenya.value,
                                      itemForm.controls.confirmarcontrasenya.value);

    console.log(this.newUsuario);


    // Enviamos el evento "characterEvent" y le pasamos el personaje creado
    this.characterEvent.emit(this.newUsuario);
  }
}
