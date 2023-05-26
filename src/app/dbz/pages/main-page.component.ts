import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

//crearlo codigo base desde el comando: a-component
@Component({
  //en el selector siempre inicia con app para normalizacion
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  //mandar a llamar a los servicios o injection de dependecias con un constructor
  constructor(private dbzService: DbzService){}

    //productos. Todo get debe de regresar un valor return...
    //eso modifica el acceso del main page html
    get characters(): Character[] {
      return [...this.dbzService.characters];
    }

    onDeleteCharacter(id:string):void{
      this.dbzService.onDeleteCharacterById(id);
    }

    onNewCharacter( character:Character):void{
      this.dbzService.addNewCharacterAccion(character);
    }


}
