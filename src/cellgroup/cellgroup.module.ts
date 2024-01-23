import { Module } from '@nestjs/common';
import { CellgroupService } from './cellgroup.service';
import { CellgroupController } from './cellgroup.controller';
import { Cellgroup } from './entities/cellgroup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CellgroupToPeople } from '../entities/cellgroupsToPeople.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cellgroup, CellgroupToPeople])],
  providers: [CellgroupService],
  controllers: [CellgroupController]
})
export class CellgroupModule {}
