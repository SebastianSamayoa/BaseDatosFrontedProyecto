import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ControlGestionesComponent } from './componentes/controlgestiones.component';
import { TiposGestionesComponent } from './componentes/tiposgestiones.component';
import { TiposMotivosComponent } from './componentes/tiposmotivos.component';
import { ReporteControlGestionesComponent } from  './componentes/reportecontrolgestiones.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlGestionesComponent,
    TiposGestionesComponent,
    TiposMotivosComponent,
    ReporteControlGestionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
