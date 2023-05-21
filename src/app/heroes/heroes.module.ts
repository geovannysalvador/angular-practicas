import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  //Se importa CommonModule por que se usason ng-if, else for en la carpeta
  imports:[
    CommonModule,
  ]
})
export class HeroesModule{}
