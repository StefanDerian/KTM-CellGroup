import { Injectable } from '@nestjs/common';
import { CreateCellgroupDto } from './dto/create-cellgroup.dto';
import { UpdateCellgroupDto } from './dto/update-cellgroup.dto';

@Injectable()
export class CellgroupService {
  create(createCellgroupDto: CreateCellgroupDto) {
    return 'This action adds a new cellgroup';
  }

  findAll() {
    return `This action returns all cellgroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cellgroup`;
  }

  update(id: number, updateCellgroupDto: UpdateCellgroupDto) {
    return `This action updates a #${id} cellgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} cellgroup`;
  }
}
