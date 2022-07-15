import { Injectable } from '@angular/core';
import { Personaje } from './personajes';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes:Personaje[] =
  [
    {
    nombre: "Vegeta",
    poder: 20000
   },
   {
    nombre: "Goku",
    poder: 25000
   },
   {
    nombre: "Krilin",
    poder: 15000
   }

 ];

 get personajes():Personaje[]{
  return[...this._personajes]
 }
 agregarPersonaje(personaje:Personaje){
  this._personajes.push(personaje);
 }

  constructor() {
    console.log("Servicio iniciado");

  }
}
