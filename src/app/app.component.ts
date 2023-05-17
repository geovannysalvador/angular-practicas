import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Holaaaa Mundo app de angular';
  public counter: number = 10;

  //crear un metodo en una clase
  increaseBy(value: number):void{
    this.counter += value;
  }

  decreaseBy(value: number):void{
    this.counter -=value;
  }

  //aca no necesita un parametro
  resetCounter():void{
    this.counter = 10;
  }
}
