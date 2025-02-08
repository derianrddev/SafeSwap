import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesResolver } from "./category.resolver";
import { CategoriesService } from "./category.service";

describe("CategoriesResolver", () => {
	let resolver: CategoriesResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CategoriesResolver, CategoriesService],
		}).compile();

		resolver = module.get<CategoriesResolver>(CategoriesResolver);
	});

	it("should be defined", () => {
		expect(resolver).toBeDefined();
	});
});
