import { Test, TestingModule } from '@nestjs/testing';
import { WhyService } from './why.service';

describe('WhyService', () => {
  let service: WhyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhyService],
    }).compile();

    service = module.get<WhyService>(WhyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
