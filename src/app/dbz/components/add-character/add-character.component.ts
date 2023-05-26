import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {


  @Output()

  public onNewCharacter:EventEmitter<Character> = new EventEmitter();


  public character:Character = {
    name: '',
    price: 0,
  };

  emitCharacter():void{

    if(this.character.name.length === 0) return;
    if(this.character.price === 0) return;

    this.onNewCharacter.emit(this.character);


    this.character = {name: '', price: 0};

  }
}
