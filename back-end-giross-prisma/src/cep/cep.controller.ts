import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CepService } from './cep.service';
import { CreateCepDto } from './dto/create-cep.dto';
import { UpdateCepDto } from './dto/update-cep.dto';
import { Cep } from './entities/cep.entity';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Post()
  create(@Body() createCepDto: CreateCepDto) {
    return this.cepService.create(createCepDto);
  }

  @Get('proximity')
  async findNearbyCeps(
    @Query('cep') cep: string,
    @Query('km') km: number,
  ): Promise<Cep[]> {
    return this.cepService.findNearbyCeps(cep, km);
  }

  @Get()
  findAll() {
    return this.cepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cepService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCepDto: UpdateCepDto) {
    return this.cepService.update(+id, updateCepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cepService.remove(+id);
  }
}
