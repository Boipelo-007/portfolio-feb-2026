import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { redis } from "@/util/redis";

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = redis
		? (
				await redis.mget<number[]>(
					...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
				)
			).reduce((acc, v, i) => {
				acc[allProjects[i].slug] = v ?? 0;
				return acc;
			}, {} as Record<string, number>)
		: Object.fromEntries(allProjects.map((project) => [project.slug, 0]));

	const publishedProjects = allProjects.filter((project) => project.published);
	const featured = ["babyfiction", "hareyeng"].flatMap((slug) => {
		const project = publishedProjects.find((item) => item.slug === slug);
		return project ? [project] : [];
	});
	const featuredSlugs = new Set(featured.map((project) => project.slug));
	const sorted = publishedProjects
		.filter((project) => !featuredSlugs.has(project.slug))
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative min-h-screen pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-300">
						A collection of academic and personal software projects
						demonstrating my growth as a software engineer and my commitment to
						continuous learning.
					</p>
				</div>
				<div className="w-full h-px bg-white/10" />

				<div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
					{featured.map((project) => (
						<Card key={project.slug}>
							<Article
								project={project}
								views={views[project.slug] ?? 0}
								featured
							/>
						</Card>
					))}
				</div>
				<div className="hidden w-full h-px md:block bg-white/10" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
