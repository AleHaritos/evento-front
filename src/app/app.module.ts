import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './features/home/home.module';
import { EventosModule } from './features/eventos/eventos.module';
import { HomeComponent } from './features/home/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    EventosModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
