import { Injectable, Logger } from "@nestjs/common";
import { FindAllRepository } from "../repository";

@Injectable()
export class FindAllUseCase {
    constructor(private readonly findAllRepository: FindAllRepository, private readonly logger: Logger) {}

    async execute(){
        try {
            const scenario = await this.findAllRepository.findAll();
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}