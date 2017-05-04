import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro-projeto/primeiro-component/primeiro.component';
import { SegundoComponent } from './primeiro-projeto/segundo-component/segundo.component';
import { CursosModule } from './segundo-projeto/curso/cursos.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CursosModule],
  declarations: [
        AppComponent,
        PrimeiroComponent,
        SegundoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
