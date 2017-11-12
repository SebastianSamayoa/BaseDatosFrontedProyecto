import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes
import { ControlGestionesComponent } from  './componentes/controlgestiones.component';
import { TiposGestionesComponent } from  './componentes/tiposgestiones.component';
import { TiposMotivosComponent } from  './componentes/tiposmotivos.component';
import { ReporteControlGestionesComponent } from  './componentes/reportecontrolgestiones.component';

const appRoutes: Routes = [
	{path: '', 						component: ControlGestionesComponent},
	{path: 'controlgestiones',		component: ControlGestionesComponent},
	{path: 'tiposgestiones',		component: TiposGestionesComponent},
	{path: 'tiposmotivos',			component: TiposMotivosComponent},
	{path: 'reportecontrolgestiones',		component: ReporteControlGestionesComponent},
	{path: '**', 					component: ControlGestionesComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);