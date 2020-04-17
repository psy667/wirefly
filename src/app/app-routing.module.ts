import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextInputComponent} from "./text-input/text-input.component";


const routes: Routes = [
  {path: '', children: [
      {path: ":id", component: TextInputComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
