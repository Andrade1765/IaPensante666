import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

 
 @Injectable()
 export class FindAllRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        const scenario = await this.prisma.scenario.findMany();
        return scenario;
    }
 }