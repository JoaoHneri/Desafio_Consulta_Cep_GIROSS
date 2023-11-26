import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() dadosDaRequisicao: any;
  isModalOpen = true;
  constructor(public modalService: ModalService) { }
  closeModal() {
    this.isModalOpen = false
  }
  
  ngOnInit(): void {
  }

}
