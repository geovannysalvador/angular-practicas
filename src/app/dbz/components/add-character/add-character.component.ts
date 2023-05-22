import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {
  public character:Character = {
    name: '',
    price: 0,
  };
  //nuevo metodo tipo void como no regresa nada
  emitCharacter():void{
    console.log(this.character);

    //limpiar el input
    this.character.name = '';
    this.character.price = 0;
  }
}
