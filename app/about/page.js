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
					<h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
					<p className="mt-4">
						Health Software Solution was born from the experience of a senior
						developer with 15 years of expertise and a passionate junior
						developer. Our mission is to revolutionize the healthcare industry
						through cutting-edge technology, making healthcare more efficient
						and accessible.
					</p>
				</section>

				<section className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500">Our Vision</h2>
					<p className="mt-4">
						We envision a future where technology bridges gaps in healthcare,
						improves patient outcomes, and streamlines administrative processes.
						Our goal is to be at the forefront of this transformation by
						delivering innovative and reliable software solutions.
					</p>
				</section>

				<section className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500">Our Team</h2>
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded shadow-lg">
							<Image
								src="/images/john-doe.jpg"
								width={300}
								height={300}
								alt="John Doe"
								className="w-full h-40 object-cover rounded-t"
							/>
							<h3 className="text-xl font-semibold text-blue-600 mt-4">
								Dr. John Doe
							</h3>
							<p className="mt-2">Senior Healthcare Specialist</p>
							<p className="mt-2">
								With 15 years of experience in healthcare, Dr. Doe brings a
								wealth of medical knowledge and insights into the technology
								that drives our solutions.
							</p>
						</div>
						<div className="bg-white p-6 rounded shadow-lg">
							<Image
								src="/images/jane-smith.jpg"
								width={300}
								height={300}
								alt="Jane Smith"
								className="w-full h-40 object-cover rounded-t"
							/>
							<h3 className="text-xl font-semibold text-blue-600 mt-4">
								Dr. Jane Smith
							</h3>
							<p className="mt-2">Healthcare Technology Consultant</p>
							<p className="mt-2">
								Dr. Smith specializes in integrating healthcare technology to
								improve patient care and streamline processes within healthcare
								facilities.
							</p>
						</div>
						{/* Aggiungi altri membri del team qui */}
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
