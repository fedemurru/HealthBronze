import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import HeroSection from "../components/HeroSection"; // Assicurati che HeroSection esista e sia importato correttamente

export default function Home() {
	return (
		<div>
			<Head>
				<title>Health Company</title>
			</Head>
			<main>
				<div className="relative h-screen">
					<Image
						src="/hero.jpg"
						alt="Hero Image"
						layout="fill"
						objectFit="cover"
						className="absolute inset-0 z-0"
					/>
					<div className="absolute inset-0 bg-black opacity-30 z-10"></div>
					<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
						<h1 className="text-4xl font-bold mb-4 text-gray-200">
							Welcome to Our Website
						</h1>
						<p className="text-lg">We provide the best services for you.</p>
						<div className="mt-10 flex justify-center space-x-4">
							{/* "Our Work" Button */}
							<Link href="/services">
								<p className=" bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
									Our Services
								</p>
							</Link>

							{/* "About Us" Button */}
							<Link href="/about">
								<p className="border border-blue-500 text-blue-500 font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition">
									About Us
								</p>
							</Link>
						</div>
					</div>
				</div>

				<section id="second" className="py-16">
					<div className="container mx-auto flex flex-col-reverse lg:flex-row p-6">
						{/* Content */}
						<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
							<h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
								Your Health Software Solution
							</h1>
							<p className="text-lg text-center lg:text-2xl lg:text-left text-gray-600">
								Experience seamless management of your health with our intuitive
								platforms. Discover powerful features and get started for free
								today.
							</p>
							{/* Buttons Container */}
							<div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
								<a
									href="/about"
									className="p-4 text-sm font-semibold text-white bg-primary rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
								>
									About us
								</a>
							</div>
						</div>

						{/* Image */}
						<div className="relative lg:w-1/2 mb-3">
							<Image
								src="/pexels.jpg"
								alt="Hero Illustration"
								width={1000}
								height={600}
								className="object-cover"
							/>
						</div>
					</div>
				</section>

				<section id="third" className="py-16">
					<div className="container mx-auto flex flex-col lg:flex-row p-6">
						{/* Image */}
						<div className="relative lg:w-1/2 mb-3">
							<Image
								src="/pexels2.jpg"
								alt="Another Illustration"
								width={1000}
								height={600}
								className="object-cover"
							/>
						</div>

						{/* Content */}
						<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2 lg:justify-center lg:items-start ml-5">
							<h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
								How We Do It
							</h1>
							<p className="text-lg text-center lg:text-2xl lg:text-left text-gray-600">
								Let’s start with what we don’t do. We don’t ruin your brand by
								basing your marketing strategy around free appointments or
								discounts on social media platforms.
							</p>
							{/* Buttons Container */}
							<div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
								<a
									href="/faq"
									className="p-4 text-sm font-semibold text-white bg-primary rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
								>
									FAQ
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
