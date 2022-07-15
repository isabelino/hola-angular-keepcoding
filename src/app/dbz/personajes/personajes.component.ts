import { Component } from '@angular/core';
import { DbzService } from '../dbz.service';
import { Personaje } from '../personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {



  constructor(private dbzService:DbzService) {

  }

   get personajes():Personaje[]{
    return this.dbzService.personajes;
   }


}
