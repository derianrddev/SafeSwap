//import { useRouter } from "next/router";
import { Menu, Search, Wallet } from "lucide-react";
//import { usePathname } from "next/navigation";
import { type Dispatch, type SetStateAction } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SidebarTrigger } from "../ui/sidebar";

interface HeaderComponentProps {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

function HeaderComponent({ searchTerm, setSearchTerm }: HeaderComponentProps) {
	//const pathname = usePathname();
	//const router = useRouter();
	//const showHomeButton = pathname?.includes("/marketplace");

	return (
		<header className="flex items-center justify-between p-6 border-b">
			<div className="flex items-center gap-4 min-w-max">
				<SidebarTrigger>
					<Button variant="outline" size="icon">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle Sidebar</span>
					</Button>
				</SidebarTrigger>
				{/* {showHomeButton && (
					<Button
						variant="outline"
						size="sm"
						className="flex items-center gap-2 px-2"
						//onClick={() => router.push("/")}
					>
						<Home className="h-5 w-5" />
						Home
					</Button>
				)} */}
			</div>
			<div className="relative w-full pl-2 max-w-[18.75rem] md:w-[18.75rem] mr-5">
				<Input
					type="search"
					placeholder="What are you looking for?"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full h-8 pr-10"
				/>
				<Button
					size="icon"
					variant="ghost"
					className="absolute right-0 top-0 h-full"
				>
					<Search className="h-5 w-5" />
					<span className="sr-only">Search</span>
				</Button>
			</div>
			<Button size="lg" className="group">
				<Wallet className="sm:mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
				<span className="hidden sm:block">Connect Wallet</span>
			</Button>
		</header>
	);
}

export default HeaderComponent;
