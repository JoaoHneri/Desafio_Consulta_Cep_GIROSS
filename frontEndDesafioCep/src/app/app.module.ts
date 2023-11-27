import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { CardHistoricoComponent } from './card-historico/card-historico.component';
import { RegisterComponent } from './register/register.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    TableComponent,
    OffCanvasComponent,
    CardHistoricoComponent,
    RegisterComponent,
    AlertErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, AppRoutingModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
