import { Test, TestingModule } from '@nestjs/testing';
import { CellgroupController } from './cellgroup.controller';
import { CellgroupService } from './cellgroup.service';

describe('CellgroupController', () => {
  let controller: CellgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CellgroupController],
      providers: [CellgroupService],
    }).compile();

    controller = module.get<CellgroupController>(CellgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
