import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="px-6 py-12 mx-auto max-w-4xl prose prose-invert prose-quoteless prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-100 prose-a:text-[#7cb4c8] prose-hr:border-[#154367]/20">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
