import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';


type NewType = Usuario;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  
  @Input() character: Usuario;
  @Output() saveEvent: EventEmitter<Usuario> = new EventEmitter<NewType>();
  @Output() deleteEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }
  saveCharacter(): void {
    this.saveEvent.emit(this.character);
  }

  deleteCharacter(): void {
    this.deleteEvent.emit(this.character);
  }
}
