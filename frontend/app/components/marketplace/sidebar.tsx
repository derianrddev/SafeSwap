import { type Dispatch, type SetStateAction } from "react";

import { Checkbox } from "../ui/checkbox";
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";
import { Slider } from "../ui/slider";

interface SidebarComponentProps {
	priceRange: [number, number];
	setPriceRange: Dispatch<SetStateAction<[number, number]>>;
	selectedCategories: string[];
	handleCategoryChange: (category: string) => void;
}

function SidebarComponent({
	priceRange,
	setPriceRange,
	selectedCategories,
	handleCategoryChange,
}: SidebarComponentProps) {
	return (
		<Sidebar>
			<SidebarHeader className="p-6 border-b">
				<h2 className="text-xl font-semibold">Filters</h2>
			</SidebarHeader>
			<SidebarContent className="p-6">
				<div className="space-y-8">
					<div>
						<h3 className="mb-2 text-lg font-medium">Price range</h3>
						<Slider
							min={0}
							max={1500}
							step={10}
							value={priceRange}
							onValueChange={(value) =>
								setPriceRange(value as [number, number])
							}
							className="mb-3"
						/>
						<div className="flex justify-between text-lg">
							<span>${priceRange[0]}</span>
							<span>${priceRange[1]}</span>
						</div>
					</div>
					<div>
						<h3 className="mb-2 text-lg font-medium">Categories</h3>
						<div className="space-y-3">
							{["Electronics", "Furniture", "Appliances", "Sports"].map(
								(category) => (
									<div key={category} className="flex items-center">
										<Checkbox
											id={category}
											checked={selectedCategories.includes(category)}
											onCheckedChange={() => handleCategoryChange(category)}
										/>
										<label htmlFor={category} className="ml-3 text-lg">
											{category}
										</label>
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</SidebarContent>
		</Sidebar>
	);
}

export default SidebarComponent;
