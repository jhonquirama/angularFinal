import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Places } from '../../models/places';



@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
 private places: Places[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.listarLugares();
  }


  listarLugares() {
    this.placesService.listar()
      .subscribe((places: Places[]
      ) => {
        console.log(places);
        this.places = places;
      });
  }

}
