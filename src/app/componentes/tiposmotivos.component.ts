import { Component } from '@angular/core';

//servicios
import { TiposMotivosService } from '../servicios/tiposmotivos.service';
//modelos
import { TiposMotivosModel } from '../modelos/tiposmotivos';


@Component({
	selector: 'tiposmotivos',
	templateUrl: '../vistas/tiposmotivos.component.html',
	providers: [TiposMotivosService]	
})

export class TiposMotivosComponent{
	public titulo = "Tipos de Motivos";
	public objecttiposmotivos;
	public tiposmotivosenviar:TiposMotivosModel;
	public id:number;

	constructor(private _tiposmotivos: TiposMotivosService){
		this.tiposmotivosenviar = new TiposMotivosModel(null,null);
		this.CargarDatosTiposMotivos();
 	}

	CrearTiposMotivos(){
	this.tiposmotivosenviar.idmotivo=this.id;
	this._tiposmotivos.crearTiposMotivos(this.tiposmotivosenviar).subscribe(
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

	CargarDatosTiposMotivos(){
		this._tiposmotivos.getTiposMotivos().subscribe(
	result =>{
		this.objecttiposmotivos = result;
		var A = [];
		for (var i = 0; i < result.length; ++i) {
			A.push(result[i].idmotivo);
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