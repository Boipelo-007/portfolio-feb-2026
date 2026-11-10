import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";

type Props = {
	project: Project;
	views: number;
	featured?: boolean;
};

export const Article: React.FC<Props> = ({
	project,
	views,
	featured = false,
}) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article
				className={`${
					featured ? "min-h-64 p-6 md:p-8" : "p-4 md:p-8"
				}`}
			>
				<div className="flex flex-wrap justify-between gap-3 items-center">
					<div className="flex flex-wrap items-center gap-3">
						{project.date && (
							<time
								className="text-xs text-zinc-500"
								dateTime={new Date(project.date).toISOString()}
							>
								{Intl.DateTimeFormat(undefined, {
									dateStyle: "medium",
								}).format(new Date(project.date))}
							</time>
						)}
					</div>
					<span className="text-zinc-400 text-xs flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<div className="mt-5 flex flex-wrap items-center gap-3">
					<h2
						className={`z-20 font-medium duration-300 text-zinc-100 group-hover:text-white font-display ${
							featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl lg:text-3xl"
						}`}
					>
						{project.title}
					</h2>
					{project.status && (
						<span className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300">
							{project.status}
						</span>
					)}
				</div>
				<p
					className={`z-20 mt-4 duration-300 text-zinc-300 group-hover:text-zinc-200 ${
						featured ? "max-w-xl text-base leading-7" : "text-sm"
					}`}
				>
					{project.description}
				</p>
				{featured && (
					<p className="mt-8 text-sm font-medium text-zinc-300 group-hover:text-white">
						View project <span aria-hidden="true">→</span>
					</p>
				)}
			</article>
		</Link>
	);
};
