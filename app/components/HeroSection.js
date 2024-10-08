import Image from "next/image";
import Link from "next/link";

// components/HeroSection.jsx

export default function HeroSection() {
	return (
		<div className="relative h-screen">
			<Image
				src="/hero.jpg"
				alt="Hero Image"
				fill
				style={{ objectFit: "cover" }}
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
						<p className=" bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
							About Us
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
