import { Component} from '@angular/core';
import { DbzService } from '../dbz.service';
import { Personaje } from '../personajes';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private dbzService:DbzService) { }

 nuevo:Personaje={
  nombre:"",
  poder:0
 }


  agregar():void{

    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:"",
      poder:0
     }

  }




}
