import { Injectable, Logger } from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { CreateOptionRepository } from '../repository/create-option.repository';

@Injectable()
export class CreateoptionUseCase {
  constructor(
    private readonly createoptionRepository: CreateOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateOptionDto) {
    try {
      const option = await this.createoptionRepository.create(data);
      this.logger.log(`option created: ${option.name}`);
      return option;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
