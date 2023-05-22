import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    //importar para poder usar [(ngModel)] en el add character html
    FormsModule,
    //para poder usar el ngfor, if...
    CommonModule
  ],

})
export class DbzModule {}
