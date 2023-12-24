import { Test, TestingModule } from '@nestjs/testing';
import { CellgroupService } from './cellgroup.service';

describe('CellgroupService', () => {
  let service: CellgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CellgroupService],
    }).compile();

    service = module.get<CellgroupService>(CellgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
