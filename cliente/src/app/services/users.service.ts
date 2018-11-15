import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUSers: Users;

  readonly API_URL = 'http://localhost:3000/user';
  users: Users[];
  constructor(private http: HttpClient) {
    this.selectedUSers = new Users();

  }

  listar() { return this.http.get(this.API_URL); }
  crear(users: Users) { return this.http.post(this.API_URL, users); }
  eliminar(_id: String) { return this.http.delete(this.API_URL + `/${_id}`); }
  actualizar(users: Users) { return this.http.put(this.API_URL + `/${users._id}`, users); }
  //login(correo:string,contrasena:string){ return this.http.post('http://localhost:3000/login',{correo,contrasena}); }
 // validateLogin(users:Users){
//return this.http.post('http://localhost:3000/login',users)
 // }
  
  
  /*
  buscar(_id:String){
    return this.http.get(this.API_URL + `/${_id}`);
  
  }
  */


}
