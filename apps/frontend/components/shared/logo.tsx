"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoProps {
	width?: number;
	height?: number;
	className?: string;
}

export function Logo({ width = 200, height = 25, className = "" }: LogoProps) {
	const { resolvedTheme } = useTheme(); // Get the current theme
	const [mounted, setMounted] = useState(false); // Check if the component is mounted

	// Ensure the component has mounted before rendering (for SSR compatibility)
	useEffect(() => {
		setMounted(true);
	}, []);
	// updating which logo should display
	const logoSrc =
		mounted && resolvedTheme === "dark"
			? "/images/logo-dark.png"
			: "/images/logo-light.png";

	return (
		<Image
			src={logoSrc}
			alt="SafeSwap Logo"
			width={width ?? 200}
			height={height ?? 25}
			className={`transition-opacity duration-300 ${className}`}
			priority
		/>
	);
}
