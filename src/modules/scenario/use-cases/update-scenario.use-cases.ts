import { Injectable, Logger } from "@nestjs/common";
import { UpdateRepository } from "../repository";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";

@Injectable() 
export class UpdateUseCase {
    constructor (private readonly UpdateRepository: UpdateRepository, private readonly logger: Logger) {}

    async execute(id:string, Dto: UpdateScenarioDto){
        try {
            const scenario = await this.UpdateRepository.update(id, Dto);
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }

}