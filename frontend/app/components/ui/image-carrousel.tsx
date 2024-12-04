import Image from "next/image";
import * as React from "react";

import { Card, CardContent } from "./card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./carousel";

interface ImageCarouselProps {
	images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
	return (
		<Carousel className="w-full">
			<div className="relative">
				<CarouselContent>
					{images.map((image, index) => (
						<CarouselItem key={index}>
							<Card className="border-0 shadow-none">
								<CardContent className="p-0">
									<div className="relative aspect-square">
										<Image
											src={image.src}
											alt={image.alt}
											width={400}
											height={400}
											priority
											className="rounded-lg"
										/>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="absolute inset-0 flex items-center justify-between p-4">
					<CarouselPrevious className="h-8 w-8 left-1 translate-x-0" />
					<CarouselNext className="h-8 w-8 right-1 translate-x-0" />
				</div>
			</div>
		</Carousel>
	);
};

export default ImageCarousel;
