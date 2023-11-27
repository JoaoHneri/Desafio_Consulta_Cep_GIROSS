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


  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);

    // Obtém os componentes de data e hora
    const day = date.getDate();
    const month = date.getMonth() + 1; // Mês é baseado em zero, então adicionamos 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Formatação com zeros à esquerda, se necessário
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    // Retorna a data e hora formatadas
    return `${formattedDay}/${formattedMonth}/${year} às ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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
