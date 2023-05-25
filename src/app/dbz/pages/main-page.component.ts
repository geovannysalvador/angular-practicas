import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//crearlo codigo base desde el comando: a-component
@Component({
  //en el selector siempre inicia con app para normalizacion
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  public characters:Character[] = [{
    name: 'Asus Laptop',
    price: 3500,
  },
  {
    name: 'Computadora de torre',
    price: 13500,
  },
  {
    name: 'AOC monitor',
    price: 5000,
  },
    {
    name: 'LG monitor',
    price: 5000,
  },
    {
    name: 'Mouse LG',
    price: 5000,
  },
    {
    name: 'Teclado Gamer',
    price: 5000,
  },
    {
    name: 'Memoria de 64GB',
    price: 5000,
  },
  {
    name: 'Disco Duro 1TB',
    price: 5000,
  },
];

//acciones que deben de hacer en si operaciones
//metodo que no regresa nada.
//lo que debe de hacer es decir ingresa o es la accion cualquiera que realiza
onNewCharacterAccion( character:Character ):void{
  //push o unshift
  //aca solo mando a indicar que character lo interte en la primera posicion y enviare el character
  this.characters.push(character);
}

//nuevo metodo para eliminar
//elimino el id que recibi del arrglego
onDeleteCharacter(index:number):void{
  this.characters.splice(index,1);
}
}
