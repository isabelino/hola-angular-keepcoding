import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './dbz.service';
import { AgregarComponent } from './agregar/agregar.component';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AgregarComponent,
    PersonajesComponent
  ],
  exports:[
    MainPageComponent,
    AgregarComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
