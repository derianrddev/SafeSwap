import { CirclePlus, Eye, MessageSquareMore, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { Product } from "@/app/types";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import ImageCarousel from "../ui/image-carrousel";
import { NavigationBreadcrumb } from "../ui/navigation-breadcrumb";
import ProductUploadModal from "../ui/product-upload-modal";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

interface ProductListProps {
	products: Product[];
}

function ProductList({
	products,
	onViewDetails,
}: ProductListProps & { onViewDetails: (product: Product) => void }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<main className="container p-6 mx-auto">
			<div className="flex items-end justify-between">
				<NavigationBreadcrumb />
				<div className="flex justify-end">
					<Button onClick={() => setShowModal(true)}>
						<CirclePlus className="mr-2 h-4 w-4" />
						Add Product
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
				{products?.map((product) => (
					<Card
						key={product.id}
						className="hover:shadow-lg mx-auto sm:mx-0 max-w-[24rem] sm:w-auto"
					>
						<CardHeader>
							<ImageCarousel images={product.images} />
							<p className="text-medium text-gray-500 px-4 pt-4">
								{product.category}
							</p>
							<CardTitle className="text-xl font-medium">
								{product.name}
							</CardTitle>
						</CardHeader>
						<CardContent className="pt-4">
							<span className="text-3xl font-bold">${product.price}</span>
						</CardContent>
						<CardFooter className="flex justify-between gap-3">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="outline">
											<MessageSquareMore className="h-4 w-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Chat with Seller</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button>
											<ShoppingCart className="h-4 w-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Add to Cart</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button
											variant="outline"
											onClick={() => onViewDetails(product)}
										>
											<Eye className="h-4 w-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>More Details</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</CardFooter>
					</Card>
				))}
			</div>

			<ProductUploadModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</main>
	);
}

export default ProductList;
