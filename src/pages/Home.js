import { React, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase-config";
// import firebase from "firebase/compat/app";
// const { FieldValue } = require("firebase-admin/firestore");

function Home() {
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
				// time: firebase.firestore.FieldValue.serverTimestamp(),
			});
			// reset input field once submitted
			document.getElementById("email-input").value = "";
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
				<section class="section--main-content">
					<div class="subsection--main-release">
						{/* <iframe
							src="https://www.youtube.com/embed/0W-VTfWL9cw?si=3QQ6UkT4As2UNytn"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe> */}
						<img
							src="site-content/psalm.png"
							class="music-cover"
							alt="psalm. by SAI's Fate. cover art"
						></img>
						<h1 id="release-title">psalm.</h1>
						<p id="creator-title">SAI's fate.</p>
					</div>
					<div class="subsection--listen-on">
						<h2 class="subheading">listen on</h2>
						<div class="logo-button-container">
							<a
								href="https://www.youtube.com/watch?v=5WGa60JYq2g"
								target="_blank"
								rel="noreferrer"
								aria-label="YouTube"
								class="logo-button"
							>
								<i class="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://open.spotify.com/track/4Fi9vGd2Qnropjt6YnEt44?si=995a4fe3cf6547c8"
								target="_blank"
								rel="noreferrer"
								aria-label="Spotify"
								class="logo-button"
							>
								<i class="fa-brands fa-spotify"></i>
							</a>
							<a
								href="https://soundcloud.com/welcomeomocloud/sais-fate-psalm"
								target="_blank"
								rel="noreferrer"
								aria-label="Soundcloud"
								class="logo-button"
							>
								<i class="fa-brands fa-soundcloud"></i>
							</a>
						</div>
						<div class="text-button-container">
							<a
								href="https://www.instagram.com/omosaisfate/"
								target="_blank"
								rel="noreferrer"
								class="text-button"
							>
								<i class="fa-brands fa-instagram"></i>
								<p>SAI</p>
							</a>
							<a
								href="https://www.snapchat.com/add/omo541"
								target="_blank"
								rel="noreferrer"
								class="text-button"
							>
								<i class="fa-brands fa-snapchat"></i>
								<p>SAI</p>
							</a>
							<a
								href="https://www.instagram.com/omotoni01"
								target="_blank"
								rel="noreferrer"
								class="text-button"
							>
								<i class="fa-brands fa-instagram"></i>
								<p>Toni</p>
							</a>
						</div>
					</div>
				</section>
				<section class="section--extra-content">
					<h2 class="subheading">extra content</h2>
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

// const colouricon = document.getElementById("colouricon");
// const headerlogo = document.getElementById("header-omo-logo");
// const footeromologo = document.getElementById("footer-omo-logo");
// const footerweatherstationlogo = document.getElementById("footer-weatherstation-logo");

// colouricon.onclick = function () {
// 	document.body.classList.toggle("dark-theme");
// 	if (document.body.classList.contains("dark-theme")) {
// 		colouricon.src = "site-content/sun-fill.svg";
// 		headerlogo.src = "site-content/omologo-white.png";
// 		footeromologo.src = "site-content/omologo-white.png";
// 		footerweatherstationlogo.src = "site-content/weatherstation_logo-white.png";
// 	} else {
// 		colouricon.src = "site-content/moon.svg";
// 		headerlogo.src = "site-content/omologo.png";
// 		footerlogo.src = "site-content/omologo.png";
// 	}
// };

export default Home;
