import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  UsuarioArray: Usuario[] = [];
  UsuarioSelected: Usuario = null;
  isCreatingNewChar: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
    this.UsuarioArray.push(new Usuario ('Pedro', 'Rodriguez', 25,13,'Streamer','pedro@gmail.com','1234','1234'));
    this.UsuarioArray.push(new Usuario ('Andrian', 'Rodriguez', 25,13,'Streamer','pedro@gmail.com','1234','1234'));
    this.UsuarioArray.push(new Usuario ('Fernando', 'Rodriguez', 25,13,'Streamer','pedro@gmail.com','1234','1234'));

    let character = localStorage.getItem('Ususario');
    this.UsuarioSelected = JSON.parse(character);
  }

  selectUsuario(character: Usuario): void {

    // Quitamos la interfaz de crear un personaje
    this.isCreatingNewChar = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    this.UsuarioSelected = character;

    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('Usuario', JSON.stringify(character));
  }

  updateUsuario(character: Usuario): void {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.UsuarioSelected = null;

    // Buscamos un personaje con el mismo nombre y lo actualizamos
    for (let i = 0; i < this.UsuarioArray.length; i++) {
      if (this.UsuarioArray[i].nom === character.nom) {
        this.UsuarioArray[i].cognom = character.cognom;
        this.UsuarioArray[i].foto = character.foto;
        this.UsuarioArray[i].descripcion = character.descripcion;
        this.UsuarioArray[i].correu = character.correu;
        this.UsuarioArray[i].correu = character.contrasenya;
        this.UsuarioArray[i].correu = character.confirmarcontrasenya;
      }
    }
  }

  deleteUsuario(character: Usuario) {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.UsuarioSelected = null;

    // Filtramos el array de personajes
    this.UsuarioArray = this.UsuarioArray.filter(
      (char: Usuario, index: number, array: Usuario[]) => {

        // Si el nombre del personaje es diferente al que tenemos que borrar
        if (char.nom !== character.nom) {

          // Guardamos el personaje en el array filtrado
          return char;
        }
      });
  }

   // Funcion para añadir un nuevo personaje en el array
   addCharacter(newCharacter: 
    Usuario): void {
    this.UsuarioArray.push(newCharacter);
  }

}
