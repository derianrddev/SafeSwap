import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/core/prisma/prisma.service";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";

describe("CategoryResolver", () => {
	let resolver: CategoryResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CategoryResolver,
				CategoryService,
				{
					provide: PrismaService,
					useValue: {
						category: {
							findMany: jest.fn(),
							findUnique: jest.fn(),
							create: jest.fn(),
						},
					},
				},
			],
		}).compile();

		resolver = module.get<CategoryResolver>(CategoryResolver);
	});

	it("should be defined", () => {
		expect(resolver).toBeDefined();
	});
});
