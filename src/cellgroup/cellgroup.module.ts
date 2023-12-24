import { Module } from '@nestjs/common';
import { CellgroupService } from './cellgroup.service';
import { CellgroupController } from './cellgroup.controller';

@Module({
  controllers: [CellgroupController],
  providers: [CellgroupService],
})
export class CellgroupModule {}
