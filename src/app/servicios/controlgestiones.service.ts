import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ControlGestionesModel } from '../modelos/controlgestiones';

@Injectable()

export class ControlGestionesService{

	public url: string;

	public nombreServicio = 'Control Gestiones';
	prueba(){
		return this.nombreServicio;
	}
	constructor( 
		private _http: Http
	){
		this.url="http://localhost:8484/controlgestion/";
	}

	getControlGestiones(){
		return this._http.get(this.url+'all').map(res => res.json());
	}

	crearControlGestiones(controlgesiones: ControlGestionesModel){

		let json = JSON.stringify(controlgesiones);
		let params = json;
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		
		return this._http.post(this.url+'crear',params, {headers: headers})
			.map(res => res.json());
	}
}