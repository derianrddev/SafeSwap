import { Bell, ShoppingCart, Wallet } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "../../ui/theme-toggle";
import { UserMenu } from "./user-menu";

export const ActionButtons = () => {
	return (
		<div className="flex gap-1">
			<Button variant="ghost" size="icon">
				<Wallet className="!h-6 !w-6 transition-transform group-hover:scale-110" />
			</Button>
			<Button variant="ghost" size="icon">
				<Bell className="!h-6 !w-6 transition-transform group-hover:scale-110" />
			</Button>
			<ThemeToggle />
			<Button variant="ghost" size="icon">
				<ShoppingCart className="!h-6 !w-6 transition-transform group-hover:scale-110" />
			</Button>
			<UserMenu />
		</div>
	);
};
