import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsersService]

})
export class RegistroComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.listarUsers();
  }

  
  listarUsers() {
    this.usersService.listar()
      .subscribe(res => {
        this.usersService.users=res as Users[];
      });
  }

  crearUsers(form: NgForm) {
    if (form.value._id) {
      this.usersService.actualizar(form.value)
        .subscribe(res => {
          console.log(res);
        })
    } else {
      this.usersService.crear(form.value)
      .subscribe(res => {
        console.log(res);
       // this.places = places;
        this.resetForm(form);
        this.listarUsers();

      })
    }
    //console.log(lugares);

  }
  


  eliminarUsers(_id: String) {
    this.usersService.eliminar(_id).subscribe(res => {
      console.log(_id);
      this.listarUsers();
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
  
  editUsers(user:Users){
    this.usersService.selectedUSers= user;


  }
 
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usersService.selectedUSers = new Users();
    }
  }


}
