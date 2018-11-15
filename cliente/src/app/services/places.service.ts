import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Places} from '../models/places';


 @Injectable({
  providedIn: 'root'
})
export class PlacesService {
  selectedPlace:Places;

   readonly API_URL='http://localhost:3000/places';
   places: Places[];
  constructor(private http: HttpClient) {
    this.selectedPlace =  new Places();
    
  }

listar(){ return this.http.get(this.API_URL);}
crear(places:Places){return this.http.post(this.API_URL,places);}
eliminar(_id:String){return this.http.delete(this.API_URL + `/${_id}`);}
actualizar(places:Places){return this.http.put(this.API_URL + `/${places._id}`,places);}
/*
buscar(_id:String){
  return this.http.get(this.API_URL + `/${_id}`);

}
*/


}
