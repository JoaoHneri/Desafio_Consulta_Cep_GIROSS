import { IsNumber, IsString } from 'class-validator';
import { Consulta } from '../entities/consulta.entity';

export class CreateConsultaDto extends Consulta {
  @IsString()
  cep: string;
  @IsNumber()
  userId: number;
  dataHora: Date;
  @IsNumber()
  raio: number;
}
