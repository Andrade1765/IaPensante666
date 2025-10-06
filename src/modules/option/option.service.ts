import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateoptionUseCase, FindAllUseCase, FindOneUseCase, RemoveUseCase, UpdateUseCase } from './use-cases';

@Injectable()
export class OptionService {

  constructor(
    private readonly createOptionUseCase: CreateoptionUseCase,
    private readonly findAllOptionUseCase: FindAllUseCase,
    private readonly findOneOptionUseCase: FindOneUseCase,
    private readonly removeOptionUseCase: RemoveUseCase,
    private readonly updateOptionUseCase: UpdateUseCase
    ) {}

  create(createOptionDto: CreateOptionDto) {
    return this.createOptionUseCase.execute(createOptionDto);
  }

  findAll() {
    return this.findAllOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneOptionUseCase.execute(id);
  }

  update(id: string, updateOptionDto: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, updateOptionDto);
  }

  remove(id: string) {
    return this.removeOptionUseCase.execute(id);
  }
}
