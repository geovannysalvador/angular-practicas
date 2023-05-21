//simple clase dcon decorador
//es la base corazon o cerebro

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 25;

  //get para crear uppercase de la variable. este get se ve como propiedades
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  //juntara en name y el age. Uso de un metodo

  getheroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  //metodos que son llamados en el html de hero
  changehero():void{
    this.name = 'Spiderman'
  }

  ChangeAge():void{
    this.age = 35;
  }

  Reset():void{
    this.name = 'Iron Man';
    this.age = 25;
  }
}
