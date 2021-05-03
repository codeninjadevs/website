import React from "react";
import CourseCard from "../components/CourseCard";

export default function Courses() {
	return (
		<div>
			<section className="my-5">
				<div className="container">
					<div className="grid grid-cols-4 gap-x-5 gap-y-6">
						{courses.map((course, idx) => (
							<CourseCard {...course} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

let courses = [
	{
		title: "HTML - হাইপারটেক্স মার্কআপ ল্যাঙ্গুয়েজ",
		slug: "html",
		thumbnail:
			"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-1.jpg",
	},
	{
		title: "CSS - ক্যাসক্যাডিং স্টাইলশিট",
		slug: "css",
		thumbnail:
			"https://www.bitdegree.org/learn/storage/media/images/css-tutorial-img1-01.o.png",
	},
	{
		title: "Javascript - জাভাস্ক্রিপ্ট",
		slug: "javascript",
		thumbnail:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg",
	},
	{
		title: "Bootstrap - বুটস্ট্যাপ",
		slug: "bootstrap",
		thumbnail:
			"https://uploads.toptal.io/blog/image/125554/toptal-blog-image-1520247930247-50c6aa937ebcb5ff2ef941c189767e6b.png",
		status: "upcoming",
	},
	{
		title: "jQuery - জেকুয়েরি",
		slug: "jquery",
		thumbnail:
			"https://rockcontent.com/wp-content/uploads/2021/02/stage-en-add-jquery-scripts-to-wordpress.png",
		status: "upcoming",
	},
	{
		title: "React.JS - রিয়্যাক্ট জেএস",
		slug: "react-js",
		thumbnail:
			"https://www.codingninjas.com/blog/wp-content/uploads/2020/05/React-Interview-Essentials.png",
		status: "upcoming",
	},
	{
		title: "Node.JS - নোড জেএস",
		slug: "node-js",
		thumbnail:
			"https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png",
		status: "upcoming",
	},
	{
		title: "Express.JS - এক্সপ্রেস জেএস",
		slug: "express-js",
		thumbnail:
			"https://storage.googleapis.com/hackersandslackers-cdn/2017/11/expressjs.jpg",
		status: "upcoming",
	},
	{
		title: "MongoDB - মঙ্গোডিবি",
		slug: "mongodb",
		thumbnail:
			"https://www.applozic.com/blog/wp-content/uploads/2019/05/1906852_93c6.jpg",
		status: "upcoming",
	},
];
