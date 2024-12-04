"use client";

import { useState } from "react";

import ProductDetailModal from "@/app/components/marketplace/product-detail-modal";
import { SidebarProvider } from "@/app/components/ui/sidebar";
import { products } from "@/lib/placeholder-data";
import HeaderComponent from "../components/marketplace/header";
import ProductList from "../components/marketplace/product-list";
import SidebarComponent from "../components/marketplace/sidebar";
import { Product } from "../types";

export default function Marketplace() {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleCategoryChange = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category)
				? prev.filter((c) => c !== category)
				: [...prev, category],
		);
	};

	const filteredProducts = products.filter(
		(product) =>
			(searchTerm === "" ||
				product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
			(selectedCategories.length === 0 ||
				selectedCategories.includes(product.category)) &&
			product.price >= priceRange[0] &&
			product.price <= priceRange[1],
	);

	const openModal = (product: Product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setIsModalOpen(false);
	};

	return (
		<SidebarProvider>
			<div className="flex h-screen overflow-hidden">
				<SidebarComponent
					priceRange={priceRange}
					setPriceRange={setPriceRange}
					selectedCategories={selectedCategories}
					handleCategoryChange={handleCategoryChange}
				/>
				<div className="flex-1 overflow-auto">
					<HeaderComponent
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>

					<ProductList products={filteredProducts} onViewDetails={openModal} />
				</div>
			</div>

			<ProductDetailModal
				isOpen={isModalOpen}
				onClose={closeModal}
				product={selectedProduct}
			/>
		</SidebarProvider>
	);
}
