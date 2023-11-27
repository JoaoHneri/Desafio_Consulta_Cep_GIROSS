import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { OffCanvasComponent } from './components/off-canvas/off-canvas.component';
import { CardHistoricoComponent } from './components/card-historico/card-historico.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';

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
