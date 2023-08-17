import { Test, TestingModule } from '@nestjs/testing';
import { NewsTypeController } from './news-type.controller';

describe('NewsTypeController', () => {
  let controller: NewsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsTypeController],
    }).compile();

    controller = module.get<NewsTypeController>(NewsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
