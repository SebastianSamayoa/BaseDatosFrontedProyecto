import { Component } from '@angular/core';

//servicios
import { TiposGestionesService } from '../servicios/tiposgestiones.service';
//modelos
import { TiposGestionesModel } from '../modelos/tiposgestiones';


@Component({
	selector: 'tiposgestiones',
	templateUrl: '../vistas/tiposgestiones.component.html',
	providers: [TiposGestionesService]	
})

export class TiposGestionesComponent{
	public titulo = "Tipos de Gestiones";
	public objecttiposgestiones;
	public tiposgestionesenviar:TiposGestionesModel;
	public id:number;

	constructor(private _tiposgestiones: TiposGestionesService){
		this.tiposgestionesenviar = new TiposGestionesModel(null,null);
		this.CargarDatosTiposGestiones();
 	}

	CrearTiposGestiones(){
	this.tiposgestionesenviar.idtipogestion=this.id;
	this._tiposgestiones.crearTiposGestiones(this.tiposgestionesenviar).subscribe(
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

	CargarDatosTiposGestiones(){
		this._tiposgestiones.getTiposGestiones().subscribe(
	result =>{
		this.objecttiposgestiones = result;
		var A = [];
		for (var i = 0; i < result.length; ++i) {
			A.push(result[i].idtipogestion);
		}
		this.id = Math.max.apply(null,A) +1 ;
		console.log(this.id);
	},
	error =>{
		console.log(<any>error);
	}
	);
	}

}