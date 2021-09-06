import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios = ['LeonardoCP', 'Ruffles123', 'Lark96'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
