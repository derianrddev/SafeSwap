import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Category {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => String, { nullable: true })
	imageUrl?: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
}
