import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public characters:Character[] = [{
    id: uuid(),
    name: 'Asus Laptop',
    price: 3500,
  },
  {
    id: uuid(),
    name: 'Computadora de torre',
    price: 13500,
  },
  {
    id: uuid(),
    name: 'AOC monitor',
    price: 5000,
  },
  {
      id: uuid(),
    name: 'LG monitor',
    price: 5000,
  },
  {
    id: uuid(),
    name: 'Mouse LG',
    price: 5000,
  },
  {
    id: uuid(),
    name: 'Teclado Gamer',
    price: 5000,
  },
  {
    id: uuid(),
    name: 'Memoria de 64GB',
    price: 5000,
  },
  {
    id: uuid(),
    name: 'Disco Duro 1TB',
    price: 5000,
  },
];


addNewCharacterAccion(character:Character ):void{

  const newCharacter:Character = {id: uuid(), ...character }
  this.characters.push(newCharacter);
}

onDeleteCharacterById(id:string){
  this.characters = this.characters.filter( character => character.id !== id );
}

}
