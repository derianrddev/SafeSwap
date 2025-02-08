import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/core/prisma/prisma.service";

@Injectable()
export class CategoryService {
	constructor(private readonly prisma: PrismaService) {}

	public async findAll() {
		return this.prisma.category.findMany();
	}

	public async findOne(id: string) {
		return this.prisma.category.findUnique({ where: { id } });
	}
}
