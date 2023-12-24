import { Controller, Get, Param, Post } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {

  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: number }) {
    return this.peopleService.findOne(params.id);
  }

  @Post()
  hello() {
    return this.peopleService.findAll();
  }

  
}
