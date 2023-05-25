import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  //uso de el output. la logica en si y crear un nuevo metodo accion
  //objeto para mandar un nuevo caracter del formulario emite uin tipo Character de la interface
  // @Output() es para que lo escuche el main-page
  @Output()
  //este es un evento es como que se inicializa
  //puede emitir string, numeros lo que sea EventEmitter
  //se crea la instancia del emisor de eventos y el tipo es <Character>
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();
  //termina aca

  public character:Character = {
    name: '',
    price: 0,
  };
  //nuevo metodo tipo void como no regresa nada
  emitCharacter():void{
    //console.log(this.character);
    //condiciones para que no envie vacio y cero en precio
    if(this.character.name.length === 0) return;
    if(this.character.price === 0) return;

    this.onNewCharacter.emit(this.character);

    //limpiar el input
    this.character = {name: '', price: 0};
    //this.character.price = 0;
    //this.character.name = '';
  }
}
