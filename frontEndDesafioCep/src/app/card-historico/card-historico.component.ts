import { Component, OnInit } from '@angular/core';
import { getHistService } from 'src/services/getHist.service';

@Component({
  selector: 'app-card-historico',
  templateUrl: './card-historico.component.html',
  styleUrls: ['./card-historico.component.css'],
})
export class CardHistoricoComponent implements OnInit {
  constructor(private getHistService: getHistService) {}
  userId = localStorage.getItem('userId');
  dadosDaRequisicao: any;

  getHist(): any {
    try {
      if (this.userId) {
        const intValue = parseInt(this.userId, 10);
        return this.getHistService.getHist(intValue).subscribe((dados) => {
          this.dadosDaRequisicao = dados;
        });
      } else {
        console.log('User id não encontrado');
      }
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
      this.getHist()
  }

  
}
