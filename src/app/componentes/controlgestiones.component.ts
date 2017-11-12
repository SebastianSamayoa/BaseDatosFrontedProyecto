import { Component } from '@angular/core';

//servicios
import { ControlGestionesService } from '../servicios/controlgestiones.service';
import { TiposGestionesService } from '../servicios/tiposgestiones.service';
import { TiposMotivosService } from '../servicios/tiposmotivos.service';
//modelos
import { ControlGestionesModel } from '../modelos/controlgestiones';
import { TiposGestionesModel } from '../modelos/tiposgestiones';
import { TiposMotivosModel } from '../modelos/tiposmotivos';


@Component({
	selector: 'controlgestiones',
	templateUrl: '../vistas/controlgestiones.component.html',
	providers: [ControlGestionesService, TiposGestionesService, TiposMotivosService]	
})

export class ControlGestionesComponent{

	public titulo="Control de Gestiones de Devolucion";

	public objectcontrolgestiones;// : CalidadProducto[];
	public objecttiposgestiones;
	public objecttiposmotivos;
	public controlgestionesenviar: ControlGestionesModel;
	public id:number;

	constructor(
		private _controlgestiones: ControlGestionesService, 
		private _tiposgestiones: TiposGestionesService, 
		private _tiposmotivos: TiposMotivosService){
		
		this.controlgestionesenviar = new ControlGestionesModel(null,null,null,null,null,null,null,null,null);
	}

	ngOnInit(){ 
		this.CargarDatosControlGestiones();
		this.CargarDatosTiposGestiones();
		this.CargarDatosTiposMotivos();
	}
	
	CrearControlGestiones(){
		this.controlgestionesenviar.idgestion=this.id;
		this._controlgestiones.crearControlGestiones(this.controlgestionesenviar).subscribe(
			response =>{
				if(response.code == 200){
					console.log('Esta Ok...');
				}
				else{
					console.log(response);
				}
			},
			error=>{
				console.log(<any>error);
			}
			);
			this.id = this.id + 1;	
		}

	CargarDatosControlGestiones(){

		this._controlgestiones.getControlGestiones().subscribe(
			result =>{
				//console.log(result);
				var A = [];
				for (var i = 0; i < result.length; ++i) {
					A.push(result[i].idgestion);
				}

				if (A.length > 0) { 
					this.id = Math.max.apply(null,A) +1;
					//console.log(this.id);
				} else {
					this.id=1;
					//console.log(this.id);
				}

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

	CargarDatosTiposGestiones(){
		this._tiposgestiones.getTiposGestiones().subscribe(
			result =>{
				this.objecttiposgestiones = result;
			},
			error =>{
				console.log(<any>error);
			}
			);
	}

	CargarDatosTiposMotivos(){
		this._tiposmotivos.getTiposMotivos().subscribe(
			result=>{
				this.objecttiposmotivos = result;
			},
			error=>{
				console.log(<any>error);
			}
		);
	}
}