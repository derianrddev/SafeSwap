"use client";

import { PackageX } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

const NotFound = () => {
	const { t } = useTranslations();

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-4">
			<PackageX className="h-24 w-24 text-muted-foreground mb-8" />
			<h1 className="text-4xl font-bold mb-4">{t("common.notFound.title")}</h1>
			<p className="text-lg text-muted-foreground mb-8 text-center">
				{t("common.notFound.description")}
			</p>
			<div className="flex gap-4">
				<Button asChild>
					<Link href="/marketplace">
						{t("common.notFound.browseMarketplace")}
					</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link href="/">{t("common.notFound.goHome")}</Link>
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
