import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

 
 @Injectable()
 export class FindAllRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        const option = await this.prisma.option.findMany();
        return option;
    }
 }