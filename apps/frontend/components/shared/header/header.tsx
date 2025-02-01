"use client";

import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { ActionButtons } from "./action-buttons";
import { SearchBar } from "./search-bar";

export default function Header() {
	return (
		<>
			<header className="flex items-center justify-between px-6 py-4 border-b">
				<Link href={"/"}>
					<Logo width={150} height={40} />
				</Link>
				<SearchBar />
				<ActionButtons />
			</header>
		</>
	);
}
