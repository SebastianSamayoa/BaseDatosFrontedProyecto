import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TiposGestionesModel } from '../modelos/tiposgestiones';

@Injectable()

export class TiposGestionesService{

	public url: string;

	public nombreServicio = 'Tipos Gestiones';
	prueba(){
		return this.nombreServicio;
	}
	constructor( 
		private _http: Http
	){
		this.url="http://localhost:8484/tiposgestiones/";
	}

	getTiposGestiones(){
		return this._http.get(this.url+'all').map(res => res.json());
	}

	crearTiposGestiones(tiposgestiones: TiposGestionesModel){

		let json = JSON.stringify(tiposgestiones);
		let params = json;
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		
		return this._http.post(this.url+'crear',params, {headers: headers})
			.map(res => res.json());
	}
}