import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsultaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createConsultaDto: CreateConsultaDto) {
    const { cep, id, raio, userId } = createConsultaDto;
    const dataHora = new Date();
    const createdCep = await this.prisma.consulta.create({
      data: {
        cep,
        dataHora,
        userId,
        raio,
        id: id !== undefined ? id : undefined,
      },
    });
    return createdCep;
  }

  async findUserHist(userId: number) {
    return this.prisma.consulta.findMany({
      where: { userId },
      orderBy: { dataHora: 'desc' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} consulta`;
  }

  update(id: number, updateConsultaDto: UpdateConsultaDto) {
    return `This action updates a #${id} consulta`;
  }

  remove(id: number) {
    return `This action removes a #${id} consulta`;
  }
}
