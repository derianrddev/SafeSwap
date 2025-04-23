import {
	CategoriesData,
	FormattedProduct,
	ProductImagesData,
	ProductsData,
} from "@/lib/types/product";
import { useEffect, useState } from "react";

const PLACEHOLDER_IMAGE = "/placeholder.png";

export default function useFormattedProducts(
	productsData: ProductsData | undefined,
	categoriesData: CategoriesData | undefined,
	imagesData: ProductImagesData | undefined,
	loading: boolean,
) {
	const [formattedProducts, setFormattedProducts] = useState<
		FormattedProduct[]
	>([]);

	useEffect(() => {
		if (productsData?.products && !loading) {
			const categoriesMap: Record<string, string> = {};

			if (categoriesData?.categories) {
				for (const category of categoriesData.categories) {
					categoriesMap[category.id] = category.name;
				}
			}

			const productImagesMap: Record<string, { src: string; alt: string }[]> =
				{};

			if (imagesData?.productImages) {
				for (const image of imagesData.productImages) {
					if (!productImagesMap[image.productId]) {
						productImagesMap[image.productId] = [];
					}
					productImagesMap[image.productId].push({
						src: image.imageUrl,
						alt: "Product image",
					});
				}
			}

			const result: FormattedProduct[] = productsData.products.map(
				(product) => ({
					id: product.id,
					name: product.name,
					slug: product.slug,
					price:
						typeof product.price === "string"
							? Number.parseFloat(product.price)
							: product.price,
					category: categoriesMap[product.categoryId] || "Unknown",
					images: productImagesMap[product.id] || [
						{ src: PLACEHOLDER_IMAGE, alt: `${product.name} image` },
					],
					condition: [product.condition || "New"],
				}),
			);

			setFormattedProducts(result);
		}
	}, [productsData, categoriesData, imagesData, loading]);

	return formattedProducts;
}
