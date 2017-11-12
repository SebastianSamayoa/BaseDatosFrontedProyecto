export class ControlGestionesModel{

	constructor(
		public idgestion:number,
		public idtipogestion:number,
		public idmotivo:number,
		public idcliente:number,
		public origen:string,
		public monto:number,
		public usuarioregistro:string,
		public fecharegistro:string,
		public estadogestion:string
		){}
}