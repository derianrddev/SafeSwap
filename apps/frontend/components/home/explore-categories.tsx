import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categories } from "@/lib/constants/categories";
import { useTranslations } from "next-intl";

export function ExploreCategories() {
	const t = useTranslations();

	return (
		<section className="py-12 px-4 md:px-8 dark:bg-white/5 bg-black/5">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">
					{t("exploreCategories.title")}
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{categories.map((category, index) => (
						<Card
							key={index}
							className="text-center hover:shadow-lg overflow-hidden"
						>
							<Link href={category.href}>
								<div className="aspect-square bg-white flex items-center justify-center mb-2 border-b">
									<Image
										src={category.src}
										alt={category.name}
										width={100}
										height={100}
										className="object-cover rounded-t-lg"
									/>
								</div>
								<p className="font-medium mb-2">{category.name}</p>
							</Link>
						</Card>
					))}
				</div>
				<div className="mt-4 text-center">
					<Button asChild>
						<Link href="/categories">{t("exploreCategories.viewAll")}</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
