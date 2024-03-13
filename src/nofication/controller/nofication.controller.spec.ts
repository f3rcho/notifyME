import { Test, TestingModule } from '@nestjs/testing';
import { NoficationController } from './nofication.controller';

describe('NoficationController', () => {
  let controller: NoficationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoficationController],
    }).compile();

    controller = module.get<NoficationController>(NoficationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
