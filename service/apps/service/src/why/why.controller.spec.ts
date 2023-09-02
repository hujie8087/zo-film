import { Test, TestingModule } from '@nestjs/testing';
import { WhyController } from './why.controller';

describe('WhyController', () => {
  let controller: WhyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhyController],
    }).compile();

    controller = module.get<WhyController>(WhyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
