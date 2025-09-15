import { Injectable, Logger } from "@nestjs/common";
import { FindOneRepository } from "../repository";

@Injectable() 
export class FindOneUseCase {
    constructor (private readonly findOneRepository: FindOneRepository, private readonly logger: Logger) {}

    async execute(id:string){
        try {
            const scenario = await this.findOneRepository.findOne(id);
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }

}