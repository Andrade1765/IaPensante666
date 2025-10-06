import { Logger, Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';

import * as UseCase from "./use-cases";
import * as Repository from "./repository";
import { SharedModule } from 'src/shared/shared.module';

const Repositories = Object.values(Repository);
const UseCases = Object.values(UseCase);

@Module({
  imports: [SharedModule],
  controllers: [OptionController],
  providers: [OptionService, ...Repositories, ...UseCases, Logger],
})
export class OptionModule {}
