export class Users {

    constructor(_id = '', nombre = '', correo = '', contrasena = '') {
        this._id = _id;
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    _id: String;
    nombre: String;
    correo: String;
    contrasena: String;


}

