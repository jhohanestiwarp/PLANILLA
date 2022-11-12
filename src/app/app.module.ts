import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ ReactiveFormsModule} from '@angular/forms';

//formato
import { AddformatoComponent } from './componente/add-formato/add-formato.component';
import { EditformatoComponent } from './componente/edit-formato/edit-formato.component';
import { ListformatoComponent } from './componente/list-formato/list-formato.component';

@NgModule({
  declarations: [
  AppComponent,
  AddformatoComponent,
  EditformatoComponent,
  ListformatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
