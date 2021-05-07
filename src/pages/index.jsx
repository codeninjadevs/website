import Link from "next/link";

export default function Home() {
	return (
		<div>
			<section>
				<div className="container flex flex-col justify-center header">
					<div className="py-10 w-3/4 mx-auto text-center">
						<h1 className="text-5xl font-extrabold mb-8 text-black">
							প্রোগ্রামিং শিখুন হাতে কলমে চর্চা ও নির্দেশনার মাধ্যমে
						</h1>
						<Link href="courses">
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
				</div>
			</section>
			<style jsx>{`
				.header {
					height: calc(100vh - 120px);
				}
			`}</style>
		</div>
	);
}
