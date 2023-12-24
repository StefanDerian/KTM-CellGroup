import { Controller, Get, Param, Post } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people2')
export class People2Controller {

  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  findAll() {
    return "here";
  }
  

  
}