import { Injectable, Param } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { People } from './entities/people.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeopleDto } from './dto/create-people';

@Injectable()
export class PeopleService {
    constructor(
        @InjectRepository(People)
        private peopleRepository: Repository<People>,
      ) {}
      findAll(): Promise<People[]> {
        return this.peopleRepository.find();
      }
      findOne(id: number): Promise<People> {
        return this.peopleRepository.findOneBy({id});
      }
      async createPeople(createPeopleDto: CreatePeopleDto) {
        const newPeople = await this.peopleRepository.create(createPeopleDto);
        await this.peopleRepository.save(createPeopleDto);
        return newPeople;
      }

      async updatePeople(id: number, createPeopleDto: CreatePeopleDto) {
        const updatedPeople = await this.peopleRepository.update(id, createPeopleDto);
        return updatedPeople;
      }
    
      async deletePeople(id: number): Promise<DeleteResult> {
        return this.peopleRepository.delete(id)
      }
}
