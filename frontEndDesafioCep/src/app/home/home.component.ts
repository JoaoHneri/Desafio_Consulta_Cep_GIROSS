import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }



  @Input()
  cep: string = '';
  @Input()
  km: string = '';
  
  consoleL(){
    console.log(this.cep)
  }

}
