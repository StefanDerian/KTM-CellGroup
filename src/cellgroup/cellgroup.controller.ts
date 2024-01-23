import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CellgroupService } from './cellgroup.service';
import { CreateCellgroupDto } from './dto/create-cellgroup.dto';


@Controller('cellgroup')
export class CellgroupController {
  constructor(private readonly cellgroupService: CellgroupService) {}

  @Post()
  create(@Body() createCellgroupDto: CreateCellgroupDto) {
    return this.cellgroupService.createCellgroup(createCellgroupDto);
  }

  @Get()
  findAll() {
    return this.cellgroupService.findAllCellgroup();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cellgroupService.findOneCellgroup(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCellgroupDto: CreateCellgroupDto) {
    return this.cellgroupService.updateCellgroup(+id, updateCellgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cellgroupService.deleteCellgroup(+id);
  }
}
