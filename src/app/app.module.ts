import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AmplifyAngularModule} from "aws-amplify-angular";
import { TextInputComponent } from './text-input/text-input.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AmplifyAngularModule
    ],
  providers: [
    AmplifyAngularModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
