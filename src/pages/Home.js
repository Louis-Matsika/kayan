import { React, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase-config";

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
			<header class="header">
				<a
					href="https://www.youtube.com/@omocloud."
					target="_blank"
					rel="noreferrer"
					class="header-logo"
				>
					<img
						src="site-content/omologo.png"
						alt="OMO logo"
						id="header-omo-logo"
					></img>
				</a>
				{/* <img
					src="site-content/moon.svg"
					alt="Toggle dark mode"
					id="colouricon"
				></img> */}
			</header>
			<main class="main-content">
				<div class="main-column">
					<section class="section-logo">
						<iframe
							src="https://www.youtube.com/embed/5jNKsFCz0rk?si=rZ3k8k6f1wMBOUuH"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>

						{/* <img
							src="site-content/welcome.png"
							class="main-pic"
							alt="welcome-omo.cloud cover art"
						></img> */}
					</section>
					<section class="section-title">
						<h1 class="song-title title">chance.</h1>
						<p class="artists title">SAI's fate.</p>
					</section>
					<section class="section-music">
						<h2 class="subheading">listen on</h2>
						<div class="listen-on-icon-buttons">
							<a
								href="https://www.youtube.com/watch?v=AOi4j4fou4g&ab_channel=SAI%27sfate."
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="YouTube"
							>
								<i class="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://open.spotify.com/track/4I7LDeeIW9Js1qJm4dY77t?si=766b354fbe0443cf"
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="Spotify"
							>
								<i class="fa-brands fa-spotify"></i>
							</a>
							<a
								href="https://soundcloud.com/welcomeomocloud"
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="Soundcloud"
							>
								<i class="fa-brands fa-soundcloud"></i>
							</a>
						</div>
						<div class="listen-on-full-buttons full-text-buttons">
							<a
								href="https://www.instagram.com/omosaisfate/"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button button-short"
							>
								<i class="fa-brands fa-instagram short-fa-logo"></i>
								<p>SAI</p>
							</a>
							<a
								href="https://www.snapchat.com/add/omo541"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button button-short"
							>
								<i class="fa-brands fa-snapchat short-fa-logo"></i>
								<p>SAI</p>
							</a>
							<a
								href="https://www.instagram.com/omotoni01"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button button-short"
							>
								<i class="fa-brands fa-instagram short-fa-logo"></i>
								<p>Toni</p>
							</a>
						</div>
					</section>
					<section class="section-extra-content">
						<h2 class="subheading">extra content</h2>
						<div class="extra-content-embed">
							<iframe
								src="https://www.youtube.com/embed/5jNKsFCz0rk?si=rZ3k8k6f1wMBOUuH"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div class="buttons extra-content-buttons full-text-buttons border-bottom">
							<p class="third-heading">Check out OMO on these platforms</p>
							<a
								href="https://www.youtube.com/@omoweatherstation"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-youtube"></i>
								<p>2nd channel</p>
							</a>
							<a
								href="https://www.tiktok.com/@omocloud"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-tiktok"></i>
								<p>OMO TikTok</p>
							</a>
						</div>
					</section>
					<section class="section-newsletter">
						<form onSubmit={submitHandler} id="form">
							<label for="email" id="input-label" class="subheading">
								Sign up for our newsletter
							</label>

							<div id="input-container">
								<input
									type="email"
									id="email"
									onChange={inputHandler}
									value={input}
									placeholder="Enter email address"
								></input>
								<button type="submit" id="submit-button">
									Sign up
								</button>
							</div>
						</form>
						{/* <div>{message}</div> */}
					</section>
				</div>
			</main>
			<footer class="footer">
				<a
					class="footer-logo"
					href="https://www.youtube.com/@omocloud."
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="site-content/omologo.png"
						alt="OMO logo"
						id="footer-omo-logo"
					></img>
				</a>
				<a
					class="footer-logo"
					href="https://www.youtube.com/@omoweatherstation"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="site-content/weatherstation_logo.png"
						alt="OMO logo"
						id="footer-weatherstation-logo"
					></img>
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
