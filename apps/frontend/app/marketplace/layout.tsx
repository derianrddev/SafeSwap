import Footer from "../components/shared/footer";
import Header from "../components/shared/header/header";

export default function MarketplaceLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<div className="min-h-[calc(100vh-160px)]">{children}</div>
			<Footer />
		</>
	);
}
