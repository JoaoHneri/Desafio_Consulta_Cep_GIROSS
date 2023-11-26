import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetLocationService } from 'src/services/getLoc.service';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public modalService: ModalService, private getLoc: GetLocationService, private router: Router) { }



  @Input()
  cep: string = '';
  @Input()
  km: string = '';

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  onSearch(cep: string, km: string):void{
    if(this.cep && this.km){
    const ceps = this.getLoc.getCeps(this.cep, this.km).subscribe(
      () => {
        console.log("Deu bom")
      },
      (error) => {
        console.error('Erro', error);
      }
    );
  } else {
    console.error('Por favor, tente novamente');
  }

  }
}
