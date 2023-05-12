import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './components/barra/barra.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { TrabajoEstudioComponent } from './components/trabajo-estudio/trabajo-estudio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    HeaderComponent,
    AcercaDeComponent,
    TrabajoEstudioComponent,
    ProyectosComponent,
    FooterComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
