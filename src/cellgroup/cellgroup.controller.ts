import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CellgroupService } from './cellgroup.service';
import { CreateCellgroupDto } from './dto/create-cellgroup.dto';
import { UpdateCellgroupDto } from './dto/update-cellgroup.dto';

@Controller('cellgroup')
export class CellgroupController {
  constructor(private readonly cellgroupService: CellgroupService) {}

  @Post()
  create(@Body() createCellgroupDto: CreateCellgroupDto) {
    return this.cellgroupService.create(createCellgroupDto);
  }

  @Get()
  findAll() {
    return this.cellgroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cellgroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCellgroupDto: UpdateCellgroupDto) {
    return this.cellgroupService.update(+id, updateCellgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cellgroupService.remove(+id);
  }
}
