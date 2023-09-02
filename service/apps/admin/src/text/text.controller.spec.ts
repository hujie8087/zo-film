import { Test, TestingModule } from '@nestjs/testing';
import { TextcController } from './text.controller';

describe('TextcController', () => {
  let controller: TextcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextcController],
    }).compile();

    controller = module.get<TextcController>(TextcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
