import { Component } from '@angular/core';
import { ControlGestionesService } from '../servicios/controlgestiones.service';
import { ControlGestionesModel } from '../modelos/controlgestiones';

@Component({
	selector: 'reportecontrolgestiones',
	templateUrl: '../vistas/reportecontrolgestiones.component.html',
	providers: [ControlGestionesService]	
})

export class ReporteControlGestionesComponent{

	public titulo="Reporte Control Gestiones";

	public objectcontrolgestiones;// : CalidadProducto[];
	public controlgestionesenviar: ControlGestionesModel;

	constructor(private _controlgestiones: ControlGestionesService){
		this.controlgestionesenviar = new ControlGestionesModel(null,null,null,null,null,null,null,null,null);
	}

	ngOnInit(){ 
		this._controlgestiones.getControlGestiones().subscribe(
			result =>{
				console.log(result);
				this.objectcontrolgestiones = result;
				if(!this.objectcontrolgestiones){
					console.log("Error en el Servidor");
				}
			},
			error =>{
				console.log(<any>error);
			}
		);
	}
	
}