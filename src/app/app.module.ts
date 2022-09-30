import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './Component/Operacion/viaje/consulta/consulta.component';
import { NuevoComponent } from './Component/Operacion/viaje/nuevo/nuevo.component';
import { RegistroViajesComponent } from './Component/Operacion/viaje/registro-viajes/registro-viajes.component';
import { DetalleVijeComponent } from './Component/Operacion/viaje/detalle-vije/detalle-vije.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    NuevoComponent,
    RegistroViajesComponent,
    DetalleVijeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
