import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
      hello(id: number): Promise<People> {
        return this.peopleRepository.findOneBy({id});
      }
    
      async remove(id: number): Promise<void> {
        await this.peopleRepository.delete(id);
      }
}
