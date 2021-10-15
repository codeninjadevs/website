import _ from "lodash";
import Link from "next/link";
// import { enrolledCourses } from "../data/courses";

const enrolledCourses = [];

export default function Home() {
	return (
		<div>
			<section className="container flex flex-col justify-center header">
				<div className="py-10 w-3/4 mx-auto text-center">
					<h1 className="text-5xl font-extrabold mb-8 text-black">
						প্রোগ্রামিং শিখুন হাতে কলমে চর্চা ও নির্দেশনার মাধ্যমে
					</h1>
					<Link href="/courses">
						<a className="inline-block px-5 py-2 bg-blue-600 rounded hover:shadow-lg text-white hover:text-white">
							আজই শুরু করুন
						</a>
					</Link>
					<ul className="flex justify-center list-disc mt-6">
						<li className="mx-5">সম্পূর্ন বাংলায়</li>
						<li className="mx-5">একদম বিনামূল্যে</li>
						<li className="mx-5">অনুশীলন সহ</li>
					</ul>
				</div>
			</section>
			<section className="container">
				<div className="grid grid-cols-5 gap-x-5 gap-y-6">
					{enrolledCourses &&
						enrolledCourses.map((course, idx) => (
							<div
								key={idx}
								className="shadow-sm border rounded-lg p-3"
								key={course.slug}
							>
								<Link href={"/lessons/" + course.slug}>
									<a>
										<img
											src={course.thumbnail}
											alt={course.title}
											className="rounded"
										/>
										<h3 className="mt-4 font-semibold inline-block">
											{_.truncate(course.title, { length: 30 })}
										</h3>
									</a>
								</Link>
							</div>
						))}
				</div>
			</section>
			<style jsx>{`
				.header {
					height: calc(100vh - ${enrolledCourses?.length ? "210px" : "120px"});
				}

				img {
					height: 80px;
					width: 100%;
					object-fit: cover;
				}
			`}</style>
		</div>
	);
}
