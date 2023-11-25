import { IsString, IsNumber } from 'class-validator';
import { Cep } from '../entities/cep.entity';

export class CreateCepDto extends Cep {
  @IsString()
  code: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
