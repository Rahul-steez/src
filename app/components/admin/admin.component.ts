import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
