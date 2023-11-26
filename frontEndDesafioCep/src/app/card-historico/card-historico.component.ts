import { Component, OnInit } from '@angular/core';
import { getHistService } from 'src/services/getHist.service';

@Component({
  selector: 'app-card-historico',
  templateUrl: './card-historico.component.html',
  styleUrls: ['./card-historico.component.css'],
})
export class CardHistoricoComponent implements OnInit {
  constructor(private getHistService: getHistService) {}
  userId = localStorage.getItem('id');
  dadosDaRequisicao: any;

  formatDateTime(data: string) {

      const parts = data.split('T');
      const datePart = parts[0].split('-').reverse().join('-');
      const timePart = parts[1].substring(0, 5);
      data = `${datePart}  às ${timePart}`;
      return data
  
  }
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
