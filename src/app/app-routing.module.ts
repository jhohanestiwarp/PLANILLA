import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//cargo

import { AddformatoComponent } from './componente/add-formato/add-formato.component';
import { EditformatoComponent } from './componente/edit-formato/edit-formato.component';
import { ListformatoComponent } from './componente/list-formato/list-formato.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'formato' },
  //formato
  { path: 'add-formato', component: AddformatoComponent },
  { path: 'edit-formato', component: EditformatoComponent },
  { path: 'list-formato', component: ListformatoComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
