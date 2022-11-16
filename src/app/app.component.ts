import { Component } from '@angular/core';
import { ICancion } from './cancion/ICancion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentesapp';
  canciones: ICancion[] = [
    {
      imagen: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "Portada de la cancion de Aerosmith"
      },
      titulo:"Crazy - Aerosmith",
      duracion: "05:30",
      artista: "Aerosmith"
    },
    {
      imagen: {
        src: "https://picsum.photos/id/400/200/300",
        alt: "Portada de la cancion himno nacional"
      },
      titulo:"Himno nacional",
      duracion: "08:30",
      artista: "Honduras"
    },
    {
      imagen: {
        src: "https://picsum.photos/id/100/200/300",
        alt: "Himno a la alegria"
      },
      titulo:"Himno a la alegria",
      duracion: "12:00",
      artista: "Betoven"
    },
    {
      imagen: {
        src: "https://picsum.photos/id/125/200/300",
        alt: "Sinfonia Betoven"
      },
      titulo:"Sinfonia",
      duracion: "15:00",
      artista: "Betoven"
    },
  ]

  agregarCancion(){
    this.canciones.push({
      imagen: {
        src: "https://picsum.photos/id/50/200/300",
        alt: "Imagen de la nueva cancion"
      },
      titulo:"Cancion nueva",
      duracion: "05:00",
      artista: "Predeterminado"
    })
  }
}
