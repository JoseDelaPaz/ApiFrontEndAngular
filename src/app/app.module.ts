import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateTarjetaCreditoComponent } from './components/create-tarjeta-credito/create-tarjeta-credito.component';
import { ListTarjetaCreditoComponent } from './components/list-tarjeta-credito/list-tarjeta-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    FooterComponent,
    CreateTarjetaCreditoComponent,
    ListTarjetaCreditoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
