import { Injectable, Logger } from "@nestjs/common";
import { UpdateRepository } from "../repository";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable() 
export class UpdateUseCase {
    constructor (private readonly UpdateRepository: UpdateRepository, private readonly logger: Logger) {}

    async execute(id:string, Dto: UpdateOptionDto){
        try {
            const option = await this.UpdateRepository.update(id, Dto);
            return option;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }

}