import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {
  datos = '../datos.json';
  publicaciones: any;
  error: any;
  imagenesPublicaciones = [
    '/assets/imagenes/Post 1.jpg',
    '/assets/imagenes/Post 2.png',
    '/assets/imagenes/Post 3.png',
    '/assets/imagenes/Post 4.png',
    '/assets/imagenes/Post 5.png',
    '/assets/imagenes/Post 6.png',
    '/assets/imagenes/Post 7.png',
    '/assets/imagenes/Post 8.png',
    '/assets/imagenes/Post 9.png',
    '/assets/imagenes/Post 10.png',
    '/assets/imagenes/Post 11.png',
    '/assets/imagenes/Post 12.png',
  ]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.datos)
    .subscribe(data => {
      this.publicaciones = data;
      console.log(this.publicaciones);
    }, error => this.error = error)
  }

}
