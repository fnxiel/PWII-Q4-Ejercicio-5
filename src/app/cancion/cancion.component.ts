import { Component, Input, OnInit } from '@angular/core';
import { ICancion } from './ICancion';
import { IImagen } from './IImagen';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  @Input() cancion: ICancion = {
    imagen: {
      src: "https://picsum.photos/200/300",
      alt: "Imagen predeterminada para la cancion"
    },
    titulo:"Cancion predeterminada",
    duracion: "00:00",
    artista: "Artista predeterminado"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
