import { Injectable } from '@nestjs/common';
import { CreateCellgroupDto } from './dto/create-cellgroup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cellgroup } from './entities/cellgroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CellgroupService {

  constructor(
    @InjectRepository(Cellgroup)
    private cellgroupRepository: Repository<Cellgroup>,
  ) {}


  async createCellgroup(createCellgroupDto: CreateCellgroupDto) {
    const newCellgroup = this.cellgroupRepository.create(createCellgroupDto);
    await this.cellgroupRepository.save(createCellgroupDto);
    return newCellgroup;
  }

  findAllCellgroup(): Promise<Cellgroup[]> {
    return this.cellgroupRepository.find();
  }

  findOneCellgroup(id: number) {
    return this.cellgroupRepository.findOneBy({id});
  }

  async updateCellgroup(id: number, updateCellgroupDto: CreateCellgroupDto) {
    const updatedCellgroup = await this.cellgroupRepository.update(id, updateCellgroupDto);
    return updatedCellgroup;
  }

  deleteCellgroup(id: number) {
    return this.cellgroupRepository.delete(id)
  }
}
