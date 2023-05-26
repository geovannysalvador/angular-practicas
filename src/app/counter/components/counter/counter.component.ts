
import { Component } from "@angular/core";

@Component({

  selector: 'app-counter',

  template: `
      <h1>{{title}}</h1>
      <h3>counter: {{counter}}</h3>
      <button (click)="increaseBy(+5)" class="btn btn-success mx-4" > + 5 </button>
      <button (click)="resetCounter()" class="btn btn-danger" > Reset </button>
      <button (click)="decreaseBy(-1)" class="btn btn-success mx-4" > - 1 </button>
  `
})
export class CounterComponent{
  public title: string = 'Holaaaa de otra forma';
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  decreaseBy(value: number):void{
    this.counter -=value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}



