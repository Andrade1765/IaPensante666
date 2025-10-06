import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateOptionDto } from "../dto/update-option.dto";

 
 @Injectable()
 export class UpdateRepository{
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, updateDto: UpdateOptionDto) {
        const option = await this.prisma.option.update({where: {id:id}, data:updateDto});
        return option;
    }
 }