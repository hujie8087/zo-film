import { Test, TestingModule } from '@nestjs/testing';
import { TextcService } from './textc.service';

describe('TextcService', () => {
  let service: TextcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextcService],
    }).compile();

    service = module.get<TextcService>(TextcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
