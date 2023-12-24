import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { People2Controller } from './people2.controller';

@Module({
  imports:[TypeOrmModule.forFeature([People])],
  providers: [PeopleService],
  controllers: [PeopleController, People2Controller],
})
export class PeopleModule {}
