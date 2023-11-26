import { Injectable } from '@nestjs/common';
import { CreateCepDto } from './dto/create-cep.dto';
import { UpdateCepDto } from './dto/update-cep.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as geolib from 'geolib';
import { Cep } from './entities/cep.entity';

@Injectable()
export class CepService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCepDto: CreateCepDto) {
    const { code, latitude, longitude, id } = createCepDto;
    const createdCep = await this.prisma.cep.create({
      data: {
        code,
        latitude,
        longitude,
        // If 'id' is provided in createCepDto, include it in the data
        id: id !== undefined ? id : undefined,
      },
    });
    return createdCep;
  }

  async findNearbyCeps(cep: string, km: number): Promise<Cep[]> {
    const sourceCep = await this.prisma.cep.findUnique({
      where: { code: cep },
    });

    if (!sourceCep) {
      throw new Error('Source CEP not found');
      // Alternatively, you can return an empty array or another response
      // return [];
    }

    const allCeps = await this.prisma.cep.findMany();
    const nearbyCeps = allCeps.filter((c) => {
      const distance = geolib.getDistance(
        { latitude: sourceCep.latitude, longitude: sourceCep.longitude },
        { latitude: c.latitude, longitude: c.longitude },
      );
      const distanceInKm = distance / 1000;
      return distanceInKm <= km;
    });

    return nearbyCeps;
  }

  findAll() {
    return `This action returns all cep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cep`;
  }

  update(id: number, updateCepDto: UpdateCepDto) {
    return `This action updates a #${id} cep`;
  }

  remove(id: number) {
    return `This action removes a #${id} cep`;
  }
}