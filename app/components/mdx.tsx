// @ts-nocheck

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

function clsx(...args: any) {
	return args.filter(Boolean).join(" ");
}

type ImageSlotProps = {
	alt: string;
	label: string;
	src: string;
	variant?: "commerce" | "dashboard" | "map" | "portfolio";
};

const ImageSlot: React.FC<ImageSlotProps> = ({
	alt,
	label,
	src,
	variant = "portfolio",
}) => {
	const [imageUnavailable, setImageUnavailable] = React.useState(false);

	return (
		<div
			className="project-image-slot"
			data-variant={variant}
			role="img"
			aria-label={`${label}: ${alt}`}
		>
			{imageUnavailable ? (
				<>
					<div className="project-image-slot__chrome" aria-hidden="true">
						<span className="project-image-slot__controls">
							<i />
							<i />
							<i />
						</span>
						<span>{label}</span>
						<span className="project-image-slot__filename">
							{src.split("/").pop()}
						</span>
					</div>
					<div className="project-image-slot__canvas" aria-hidden="true">
						<span className="project-image-slot__glow" />
						<span className="project-image-slot__line project-image-slot__line--short" />
						<span className="project-image-slot__line" />
						<span className="project-image-slot__line project-image-slot__line--long" />
						<span className="project-image-slot__panel project-image-slot__panel--one" />
						<span className="project-image-slot__panel project-image-slot__panel--two" />
						<span className="project-image-slot__panel project-image-slot__panel--three" />
					</div>
				</>
			) : (
				<Image
					src={src}
					alt={alt}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
					className="project-image-slot__image"
					onError={() => setImageUnavailable(true)}
				/>
			)}
		</div>
	);
};

const components = {
	h1: ({ className, ...props }) => (
		<h1
			className={clsx(
				"mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }) => (
		<h2
			className={clsx(
				"mt-12 scroll-m-20 border-b border-b-white/10 pb-3 text-3xl font-semibold tracking-tight first:mt-0 text-zinc-100 font-display",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }) => (
		<h3
			className={clsx(
				"mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }) => (
		<h4
			className={clsx(
				"mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }) => (
		<h5
			className={clsx(
				"mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }) => (
		<h6
			className={clsx(
				"mt-8 scroll-m-20 text-base font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }) => (
		<Link
			className={clsx(
				"font-medium text-zinc-300 underline underline-offset-4 decoration-white/25 hover:text-white",
				className,
			)}
			{...props}
		/>
	),
	p: ({ className, ...props }) => (
		<p
			className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }) => (
		<ul className={clsx("my-6 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }) => (
		<ol className={clsx("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }) => (
		<li className={clsx("mt-2", className)} {...props} />
	),
	blockquote: ({ className, ...props }) => (
		<blockquote
			className={clsx(
				"mt-6 border-l-2 border-white/20 pl-6 italic text-zinc-300 [&>*]:text-zinc-300",
				className,
			)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={clsx("rounded-md border border-white/10", className)}
			alt={alt}
			{...props}
		/>
	),
	hr: ({ ...props }) => (
		<hr className="my-8 border-white/10 md:my-12" {...props} />
	),
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="w-full my-6 overflow-y-auto">
			<table className={clsx("w-full", className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={clsx(
				"m-0 border-t border-white/10 p-0 even:bg-white/[0.025]",
				className,
			)}
			{...props}
		/>
	),
	th: ({ className, ...props }) => (
		<th
			className={clsx(
				"border border-white/10 px-4 py-2 text-left font-bold text-zinc-100 [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }) => (
		<td
			className={clsx(
				"border border-white/10 px-4 py-2 text-left text-zinc-300 [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	pre: ({ className, ...props }) => (
		<pre
			className={clsx(
				"mt-8 mb-6 overflow-x-auto rounded-xl bg-black/50 py-5 border border-white/10",
				className,
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }) => (
		<code
			className={clsx(
				"relative rounded border border-white/10 bg-white/[0.06] py-[0.2rem] px-[0.3rem] font-mono text-sm text-zinc-100",
				className,
			)}
			{...props}
		/>
	),
	ImageSlot,
	Image,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
