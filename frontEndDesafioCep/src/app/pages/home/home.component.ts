import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetLocationService } from 'src/services/getLoc.service';
import { ModalService } from 'src/services/modal.service';
import { insertHistService } from 'src/services/insertHIst.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  constructor(public modalService: ModalService, private getLoc: GetLocationService, private router: Router, private inserHist: insertHistService) { }



  @Input()
  cep: string = '';
  @Input()
  km: string = '';
  
  isModalOpen = false;
  dadosDaRequisicao: any;
  
  openModal() {
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  formatarCEP(cep: string): string {
    // Remover caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    // Inserir a máscara padrão
    return `${cep.slice(0, 5)}-${cep.slice(5)}`;
  }

  


  userId = localStorage.getItem('id');
  intValueofUserID = 0;
  messageError = "";


  addHist(cep: string, km: number): any{
    try {
      if(this.userId){
        const intValue = parseInt(this.userId, 10)
        this.intValueofUserID = intValue;
      }
      return this.inserHist.addHist(cep, km, this.intValueofUserID).subscribe(()=>{
        console.log("Dados inseridos no histórico")
      })
    } catch (error) {
      console.log(error)
    }
  }

  onSearch(cep: string, km: string): any{
    if(this.cep && this.km){
    return this.getLoc.getCeps(this.cep, this.km).subscribe(
      (dados) => {
        if(dados.length === 0){
          this.messageError = "Cep não existe"
          return
        }
        this.messageError = ""
        this.dadosDaRequisicao = dados
        this.modalService.openModal();
        const intValue = parseInt(this.km, 10)

        this.addHist(cep, intValue)
      },
      (error) => {
        console.error('Erro', error);
      }
    );
  } else {
    this.messageError = "Por favor preencha os campos"
  }

  }
}
