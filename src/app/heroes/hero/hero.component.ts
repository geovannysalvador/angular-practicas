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
  public metod: string = '';
  public capitalice: string = '';
}
