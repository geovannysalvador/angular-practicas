import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    //aca se importan el counter.componet.ts es decir la clase dentro del archivo

  ],
  imports: [
    BrowserModule,
    // aca va en counter.module.ts para indicar que lo use
    // al realizar un modulo ya solo hago una importacion y envia toda la carpeta counter por asi decirlo
    CounterModule,
    HeroesModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
