import Head from "next/head";
import Image from "next/image";

export default function About() {
	return (
		<div>
			<Head>
				<title>About Us - Health Software Solution</title>
				<meta
					name="description"
					content="Learn more about Health Software Solution, our mission, vision, and the team behind our innovative healthcare solutions."
				/>
			</Head>
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold text-blue-600">About Us</h1>

				<section className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500">Our Team</h2>
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
							<div className="w-52 h-52 relative overflow-hidden rounded-full border-4 border-blue-500 flex items-center justify-center">
								<Image
									src="/example2.jpg"
									layout="fill"
									objectFit="cover"
									objectPosition="top"
									alt="John Doe"
								/>
							</div>
							<h3 className="text-xl font-semibold text-blue-600 mt-4">
								Dr. John Doe
							</h3>
							<p className="mt-2">Senior Healthcare Specialist</p>
							<p className="mt-2 text-center">
								With 15 years of experience in healthcare, Dr. Doe brings a
								wealth of medical knowledge and insights into the technology
								that drives our solutions.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
							<div className="w-52 h-52 relative overflow-hidden rounded-full border-4 border-blue-500 flex items-center justify-center">
								<Image
									src="/example1.jpg"
									layout="fill"
									objectFit="cover"
									alt="John Doe"
									className="transform scale-40"
								/>
							</div>
							<h3 className="text-xl font-semibold text-blue-600 mt-4">
								Dr. Jane Smith
							</h3>
							<p className="mt-2">Healthcare Technology Consultant</p>
							<p className="mt-2 text-center">
								Dr. Smith specializes in integrating healthcare technology to
								improve patient care and streamline processes within healthcare
								facilities.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
							<div className="w-52 h-52 relative overflow-hidden rounded-full border-4 border-blue-500 flex items-center justify-center">
								<Image
									src="/example3.jpg"
									layout="fill"
									objectFit="cover"
									alt="Alex Johnson"
								/>
							</div>
							<h3 className="text-xl font-semibold text-blue-600 mt-4">
								Dr. Alex Johnson
							</h3>
							<p className="mt-2">Medical Data Analyst</p>
							<p className="mt-2 text-center">
								Dr. Johnson specializes in analyzing medical data to improve
								patient outcomes and optimize healthcare operations through
								advanced analytics and technology.
							</p>
						</div>
					</div>
				</section>

				<section className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500">Our Values</h2>
					<ul className="mt-4 list-disc list-inside">
						<li className="mt-2">
							Innovation: Continuously evolving our solutions to meet the needs
							of the healthcare industry.
						</li>
						<li className="mt-2">
							Integrity: Upholding the highest standards of ethics and
							professionalism.
						</li>
						<li className="mt-2">
							Customer-Centricity: Focusing on delivering value and exceptional
							service to our clients.
						</li>
					</ul>
				</section>

				<section className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500">Contact Us</h2>
					<p className="mt-4">
						For more information about our services or to get in touch with our
						team, please visit our{" "}
						<a href="/contact" className="text-blue-600 hover:underline">
							Contact Page
						</a>
						.
					</p>
				</section>
			</main>
		</div>
	);
}
