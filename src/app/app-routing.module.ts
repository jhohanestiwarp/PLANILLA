import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//cargo
// import {  } from './component/';
// import {  } from './component/';
import { AddformatoComponent } from './componente/add-formato/add-formato.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'formato' },
  //formato
  { path: 'add-formato', component: AddformatoComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
