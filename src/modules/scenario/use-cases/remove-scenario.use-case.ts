import { Injectable, Logger } from "@nestjs/common";
import { RemoveRepository} from "../repository"; 

@Injectable() 
export class RemoveUseCase{
    constructor (private readonly RemoveRepository: RemoveRepository, private readonly logger: Logger) {}

    async execute(id:string){
        try {
            const scenario = await this.RemoveRepository.remove(id);
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }

}