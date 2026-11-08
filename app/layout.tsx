import "../global.css";
import { IBM_Plex_Sans, Sora } from "next/font/google";
import { Metadata } from "next";
import { Analytics as BeamAnalytics } from "./components/analytics";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	title: {
		default: "boipleo.codes",
		template: "%s | boipleo.codes",
	},
	description: "Aspiring software engineer.",
	openGraph: {
		title: "boipleo.codes",
		description: "Aspiring software engineer.",
		url: "https://boipleo.codes",
		siteName: "boipleo.codes",
		images: [
			{
				url: "https://boipleo.codes/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "boipleo.codes",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const plexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-plex-sans",
});

const sora = Sora({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sora",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[plexSans.variable, sora.variable].join(" ")}>
			<head>
				<BeamAnalytics />
			</head>
			<body
				className={`bg-[#050608] font-sans ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
