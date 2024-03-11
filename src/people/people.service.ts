import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { People } from './entities/people.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeopleDto } from './dto/create-people';
import { CellgroupToPeople } from 'src/entities/cellgroupsToPeople.entity';
import { AssignPeopleToCellgroupDto } from './dto/assign-people-to-cellgroup-dto';

@Injectable()
export class PeopleService {
    constructor(
        @InjectRepository(People)
        private peopleRepository: Repository<People>,
        @InjectRepository(CellgroupToPeople)
        private cellgroupToPeopleRepository: Repository<CellgroupToPeople>,
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

      async assignPeopleToCellGroup(assignPeopleToCellGroup: AssignPeopleToCellgroupDto) {
        const newAssignedPeople = await this.cellgroupToPeopleRepository.create(assignPeopleToCellGroup);
        await this.cellgroupToPeopleRepository.save(assignPeopleToCellGroup);
        return newAssignedPeople;
      }

      async getAllPeopleCellGroups() {
        const peopleCellGroupAssignments = await this.cellgroupToPeopleRepository.find({
          relations: {
              cellgroups: true,
              people: true
          },
        })
        return peopleCellGroupAssignments;
      }

      async updatePeople(id: number, createPeopleDto: CreatePeopleDto) {
        const updatedPeople = await this.peopleRepository.update(id, createPeopleDto);
        return updatedPeople;
      }
    
      async deletePeople(id: number): Promise<DeleteResult> {
        return this.peopleRepository.delete(id)
      }
}
