"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";

export default function Contact() {
	const formRef = useRef();

	const { alert, showAlert, hideAlert } = useAlert();
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (!form.name || !form.email || !form.message) {
			setLoading(false);
			showAlert({
				show: true,
				text: "Please fill in all the fields",
				type: "danger",
			});
			return;
		}

		try {
			// Invio dell'email usando EmailJS
			await emailjs.send(
				process.env.EMAILJS_SERVICE_ID,
				process.env.EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Federico",
					from_email: form.email,
					to_email: "federico.murru87@gmail.com",
					message: form.message,
				},
				process.env.EMAILJS_PUBLIC_KEY
			);

			// Se l'invio ha successo
			setLoading(false);
			showAlert({
				show: true,
				text: "Thank you for your message 😃",
				type: "success",
			});

			setTimeout(() => {
				hideAlert(false);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			}, 3000);
		} catch (error) {
			// Se l'invio fallisce
			setLoading(false);
			console.error("Email send error: ", error);

			showAlert({
				show: true,
				text: "I didn't receive your message 😢",
				type: "danger",
			});
		}
	};

	//service_lg30a2k
	// template_908by6p
	return (
		<section className="container mx-auto py-16">
			<h1 className="text-3xl font-bold text-center text-primary mb-8">
				Contact Us
			</h1>
			<form
				className="max-w-lg mx-auto bg-gray-200 p-8 rounded-lg shadow"
				ref={formRef}
				onSubmit={handleSubmit}
			>
				<div className="mb-4">
					<label className="block text-gray-700">Name</label>
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						placeholder="ex., John Doe"
						className="w-full px-4 py-2 border rounded-lg"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Email</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						required
						placeholder="ex., johndoe@gmail.com"
						className="w-full px-4 py-2 border rounded-lg"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Message</label>
					<textarea
						name="message"
						value={form.message}
						onChange={handleChange}
						required
						rows={5}
						placeholder="Share your inquiries..."
						className="w-full px-4 py-2 border rounded-lg"
					></textarea>
				</div>
				<button
					type="submit"
					disabled={loading}
					className="w-full bg-primary text-white px-4 py-2 rounded-lg"
				>
					{loading ? "Sending..." : "Send Message"}
				</button>
			</form>
		</section>
	);
}
