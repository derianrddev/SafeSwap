import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./breadcrumb";

export function NavigationBreadcrumb() {
	const pathname = usePathname();

	// Split the route into segments and filter out empty ones (e.g., "/")
	const pathSegments = pathname.split("/").filter(Boolean);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{/* Link to the home page */}
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href="/">Home</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				{pathSegments.length > 0 && <BreadcrumbSeparator />}

				{/* Dynamically build the rest of the breadcrumbs */}
				{pathSegments.map((segment, index) => {
					// Build the cumulative URL for each segment
					const href = "/" + pathSegments.slice(0, index + 1).join("/");

					// Build the cumulative URL for each segment
					const isLast = index === pathSegments.length - 1;

					return (
						<div key={segment}>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage className="capitalize">
										{decodeURIComponent(segment)}
									</BreadcrumbPage>
								) : (
									<BreadcrumbLink className="capitalize" asChild>
										<Link href={href}>{decodeURIComponent(segment)}</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLast && <BreadcrumbSeparator />}
						</div>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
