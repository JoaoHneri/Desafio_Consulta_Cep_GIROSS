import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public modalService: ModalService) { }



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

}
