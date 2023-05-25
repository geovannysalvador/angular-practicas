import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  //informacion para renderizar es una caracterList es un atributo por asi decirlo
  public caracterList: Character[] = [{
    name: 'Laptop de oficina',
    price: 10,
  }];


    @Output()
    //este onDElete es un evento en particular y se usa () en la etiqueta dbz-list del archivo main-pages
    public OnDelete:EventEmitter<number> = new EventEmitter();

    //mandar a llamar este evento: onDeleteCharacter, en el main-page en la etiqueta dbz-list
    //esta es la accion que debe de hacer el OnDelete me manda el id del arreglo
    onDeleteCharacterButton(index:number):void{
      //TODO: emitir el id del personaje
    this.OnDelete.emit(index);
  }
}
