import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './app/layout/index/index.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoaslistComponent,
    PessoasdetailsComponent,
    CarroslistComponent,
    CarrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
