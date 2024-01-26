import { React, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase-config";
// import firebase from "firebase/app";
// import firebase from "firebase";
// import firebase from "firebase/compat/app";

function NoMusic() {
	const [input, setInput] = useState("");
	// const [message, setMessage] = useState("");
	const inputHandler = (e) => {
		setInput(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (input) {
			console.log(input);
			// add input to firebase database
			addDoc(collection(db, "emails"), {
				email: input,
			});
			// reset input field once submitted
			document.getElementById("email").value = "";
			// send message when form is submitted
			// setInput("");
			// setMessage("Thank you for subscribing");
			// setTimeout(() => {
			// 	setMessage("");
			// }, 3000);
		}
	};
	return (
		<div>
			<header>
				<a
					href="https://www.youtube.com/@omocloud."
					target="_blank"
					rel="noreferrer"
					class="header-logo-wrapper"
				>
					<img
						src="site-content/omologo.png"
						alt="OMO logo"
						class="header-logo"
					/>
				</a>
			</header>
			<main>
				<section
					class="section--extra-content"
					id="section--extra-content--no-music-page"
				>
					<iframe
						src="https://www.youtube.com/embed/KBOV4KTHQR4?si=sGzIscYHuLPsNQpe"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
					<p class="extra-platforms-title">Check out OMO on these platforms</p>
					<div class="text-button-container">
						<a
							href="https://www.youtube.com/@omoweatherstation"
							target="_blank"
							rel="noreferrer"
							class="text-button"
						>
							<i class="fa-brands fa-youtube"></i>
							<p>2nd channel</p>
						</a>
						<a
							href="https://www.tiktok.com/@omocloud"
							target="_blank"
							rel="noreferrer"
							class="text-button"
						>
							<i class="fa-brands fa-tiktok"></i>
							<p>OMO TikTok</p>
						</a>
					</div>
				</section>
				<section class="section--newsletter">
					<form onSubmit={submitHandler} id="newsletter-form">
						<label for="email-input" id="input-label" class="subheading">
							Sign up for our newsletter
						</label>

						<div id="input-container">
							<input
								type="email"
								id="email-input"
								onChange={inputHandler}
								value={input}
								placeholder="Enter email address"
							/>
							<button type="submit" id="submit-button">
								Sign up
							</button>
						</div>
					</form>
				</section>
			</main>
			<footer>
				<a
					href="https://www.youtube.com/@omocloud."
					target="_blank"
					rel="noreferrer"
					class="footer-logo-wrapper footer-logo-wrapper--omo"
				>
					<img
						src="site-content/omologo.png"
						alt="OMO logo"
						class="footer-logo"
						id="footer-logo--omo"
					/>
				</a>
				<a
					href="https://www.youtube.com/@omoweatherstation"
					target="_blank"
					rel="noreferrer"
					class="footer-logo-wrapper footer-logo-wrapper--weatherstation"
				>
					<img
						src="site-content/weatherstation_logo.png"
						alt="OMOweatherstation logo"
						class="footer-logo"
						id="footer-logo--weatherstation"
					/>
				</a>
			</footer>
		</div>
	);
}

export default NoMusic;
