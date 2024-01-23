import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { CellgroupToPeople } from 'src/entities/cellgroupsToPeople.entity';


@Module({
  imports:[TypeOrmModule.forFeature([People, CellgroupToPeople])],
  providers: [PeopleService],
  controllers: [PeopleController],
})
export class PeopleModule {}
