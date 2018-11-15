import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Places } from '../../models/places';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PlacesService]
})
export class DashboardComponent implements OnInit {
 
  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
    this.listarLugares();
  }


  listarLugares() {
    this.placesService.listar()
      .subscribe(res => {
        this.placesService.places=res as Places[];
      });
  }

  crearLugar(form: NgForm) {
    if (form.value._id) {
      this.placesService.actualizar(form.value)
        .subscribe(res => {
          console.log(res);
        })
    } else {
      this.placesService.crear(form.value)
      .subscribe(res => {
        console.log(res);

       // this.places = places;
        this.resetForm(form);
        this.listarLugares();

      })
    }
    //console.log(lugares);

  }


  eliminarLugar(_id: String) {
    this.placesService.eliminar(_id).subscribe(res => {
      console.log(_id);
      this.listarLugares();
    })
  }

  /*
  BuscarLugar(_id:String){
    this.placesService.buscar(_id).subscribe(res =>{
      console.log(_id);
    this.listarLugares();
    })
  }
   */
  
  editPlace(place:Places){
    this.placesService.selectedPlace= place;


  }
 
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.placesService.selectedPlace = new Places();
    }
  }
}