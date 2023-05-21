import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor','Rocket','Lobo','DeadPool',];
  //aca creamos la propiedad de clase para poderlo usar
  public deletedHero?: string = '';

  //eliminar el ultimo elemento del arreglo no regresa nada es de tipo void
  removeLastHeroe():void{
    //pop remueve el elemento y lo retorna lo almaceno en deletedHero

    this.deletedHero = this.heroNames.pop();
  }
}
