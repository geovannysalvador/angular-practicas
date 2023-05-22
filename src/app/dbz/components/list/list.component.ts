import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {
  //comunicacion entre componentes. Es decir que lo puedo mandar a llamar a otro lado por asi decirlo
  //lo manda pro defecto si no hay nada aunque puede ir vacio.
  @Input()
  //informacion para renderizar
  public caracterList: Character[] = [{
    name: 'Laptop de oficina',
    price: 10,
  },

]
}
