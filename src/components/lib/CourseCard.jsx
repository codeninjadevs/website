import React from "react";
import Link from "next/link";

export default function CourseCard({ title, slug, thumbnail, status }) {
	return (
		<>
			<div className="shadow border-gray-200 rounded-lg p-3" key={slug}>
				<Link href={"/course/" + slug}>
					<a>
						<img src={thumbnail} alt={title} className="rounded" />
						<h3 className="mt-4 font-semibold inline-block">
							{title}
							{status === "upcoming" ? (
								<span className="bg-red-600 px-2 py-0.5 ml-2 rounded-full text-xs font-semibold text-white">
									আসন্ন
								</span>
							) : null}
						</h3>
					</a>
				</Link>
			</div>
			<style jsx>{`
				img {
					height: 148px;
					width: 100%;
					object-fit: cover;
				}
			`}</style>
		</>
	);
}
