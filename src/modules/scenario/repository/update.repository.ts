import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";

 
 @Injectable()
 export class UpdateRepository{
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, updateDto: UpdateScenarioDto) {
        const scenario = await this.prisma.scenario.update({where: {id:id}, data:updateDto});
        return scenario;
    }
 }