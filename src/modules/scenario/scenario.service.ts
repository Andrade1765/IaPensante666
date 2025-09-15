import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, FindAllUseCase, FindOneUseCase, RemoveUseCase, UpdateUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(
      private readonly createScenarioUseCase: CreateScenarioUseCase,
      private readonly findAllUseCase: FindAllUseCase,
      private readonly findOneUseCase: FindOneUseCase,
      private readonly updateUseCase: UpdateUseCase,
      private readonly removeUseCase: RemoveUseCase,
    ) {}

  create(createScenarioDto: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(createScenarioDto);
  }

  findAll() {
    return this.findAllUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneUseCase.execute(id);
  }

  update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return this.updateUseCase.execute(id, updateScenarioDto);
  }

  remove(id: string) {
    return this.removeUseCase.execute(id);
  }
}
