import Image from "next/image";
import Link from "next/link";

// components/HeroSection.jsx
export default function HeroSection() {
	return (
		<section className="bg-transparent py-16">
			<div className="container mx-auto text-center">
				{/* Heading */}
				<h1 className="text-4xl lg:text-5xl font-bold text-black">
					Your Health Company
				</h1>

				{/* Subheading */}
				<p className="mt-6 text-lg lg:text-xl text-gray-800">
					Caring for your health needs through Physiotherapy, Nutrition, and
					Yoga Therapy
				</p>

				{/* Buttons */}
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
		</section>
	);
}
