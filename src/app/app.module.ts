import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialDesignModules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ...MaterialDesignModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
