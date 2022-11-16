import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DescatadoComponent } from './descatado/descatado.component';
import { BotonComponent } from './boton/boton.component';
import { CancionComponent } from './cancion/cancion.component';

@NgModule({
  declarations: [
    AppComponent,
    DescatadoComponent,
    BotonComponent,
    CancionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
