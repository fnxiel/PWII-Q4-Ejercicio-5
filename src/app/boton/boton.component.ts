import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() textoBoton: string = 'Etiqueta boton'
  @Input() estiloBoton: "btn btn-success" | "btn btn-danger" = "btn btn-success"
  
  constructor() { }
  //Binding
  ngOnInit(): void {
  }

}

//index.html
    //app-root >> titulos de cada boton
          //app-boton >>>
