import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TiposMotivosModel } from '../modelos/tiposmotivos';

@Injectable()

export class TiposMotivosService{

	public url: string;

	public nombreServicio = 'Tipos Motivos';
	prueba(){
		return this.nombreServicio;
	}
	constructor( 
		private _http: Http
	){
		this.url="http://localhost:8484/tiposmotivos/";
	}

	getTiposMotivos(){
		return this._http.get(this.url+'all').map(res => res.json());
	}

	crearTiposMotivos(tiposmotivos: TiposMotivosModel){

		let json = JSON.stringify(tiposmotivos);
		let params = json;
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		
		return this._http.post(this.url+'crear',params, {headers: headers})
			.map(res => res.json());
	}
}