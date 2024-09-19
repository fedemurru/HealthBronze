import { NextResponse } from "next/server";

export const caseStudies = [
	{
		id: 1,
		title: "Cardiology Consultation",
		description:
			"Expert consultations for heart health, including diagnostics, treatment plans, and ongoing care from top cardiologists.",

		image: "/service1.jpg",
		link: "/project-a",
	},
	{
		id: 2,
		title: "Pediatric Care",
		description:
			"Comprehensive care for children, including routine check-ups, vaccinations, and treatment of common childhood illnesses.",
		image: "/service2.jpg",
		link: "/project-b",
	},
	{
		id: 3,
		title: "Orthopedic Services",
		description:
			"Specialized orthopedic care for musculoskeletal issues, including injury treatment, surgery, and rehabilitation.",
		image: "/service3.jpg",
		link: "/project-c",
	},

	// Add more projects as needed
];

export const GET = (req, res) => {
	try {
		if (!caseStudies) {
			return NextResponse.json(
				{ message: "No data available" },
				{
					status: 404,
					headers: {
						"Cache-Control": "no-store", // Prevent caching
					},
				}
			);
		}

		return NextResponse.json(caseStudies, {
			headers: {
				"Cache-Control": "no-store", // Prevent caching
			},
		});
	} catch (error) {
		console.error("Error handling GET request:", error);

		return NextResponse.json(
			{
				message: "An error occurred while processing your request.",
				cause: error.message || "Unknown error",
			},
			{
				status: 500,
				headers: {
					"Cache-Control": "no-store", // Prevent caching
				},
			}
		);
	}
};
