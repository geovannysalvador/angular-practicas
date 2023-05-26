import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {


  //codigo del main.ts ya que son servicios pero en este archivo lo vamos a pegar
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

//acciones que deben de hacer en si operaciones
//metodo que no regresa nada.
//lo que debe de hacer es decir ingresa o es la accion cualquiera que realiza
addNewCharacterAccion(character:Character ):void{
  //push o unshift
  //aca solo mando a indicar que character lo interte en la primera posicion y enviare el character

  //nuevo objeto con todas las propiedades
  const newCharacter:Character = {id: uuid(), ...character }
  this.characters.push(newCharacter);
}

//nuevo metodo para eliminar
//elimino el id que recibi del arrglego de forma normal
// onDeleteCharacter(index:number):void{
//   this.characters.splice(index,1);
// }
onDeleteCharacterById(id:string){
  this.characters = this.characters.filter( character => character.id !== id );
}

}
