import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDto } from './dto/create-people';

@Controller('people')
export class PeopleController {

  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') params: { id: number }) {
    return this.peopleService.findOne(params.id);
  }

  @Post()
  createPeople(@Body() CreatePeopleDto: CreatePeopleDto) {
    return this.peopleService.createPeople(CreatePeopleDto);
  }

  @Put(':id')
  updateuser(
    @Param('id')
    id: number,
    @Body()
    people: CreatePeopleDto,
  ) {
    return this.peopleService.updatePeople(id, people);
  }

  @Delete()
  deleteUser(@Body() id: number) {
    return this.peopleService.deletePeople(id);
  }

  
}
