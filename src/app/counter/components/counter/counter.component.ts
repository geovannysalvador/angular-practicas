//al importar la clase debemos de importar component de angular/core es un decorador

//para isar este bloque de codigo debemos de mandarlo al modulo en este caso
//al app.module.ts

//se pueden usar a- para el codigo augtocompletado
import { Component } from "@angular/core";

@Component({
  //selector para como usarlo en el html osea el nombre que se le desea dar
  selector: 'app-counter',
  //espera que creamos en tample en un string/cuerpo loq ue deseamos mostrar en pantalla
  //template: '<h1> Hola Counter usando decorador/observable</h1>'
  //para poder hacer un string multi linea
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



