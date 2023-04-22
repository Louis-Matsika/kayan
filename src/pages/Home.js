import React from "react";

function Home() {
	return (
		<div>
			<header class="header">
				<a
					href="https://www.instagram.com/omocloud/"
					target="_blank"
					rel="noreferrer"
					class="header-link"
				>
					<img
						src="site-content/omologo.png"
						alt="OMO logo"
						class="header-logo"
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
							src="https://www.youtube.com/embed/MSuIMOs5HXo"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</section>
					<section class="section-title">
						<h1 class="song-title title">On my feet</h1>
						<p class="artists title">omo Toni</p>
					</section>
					<section class="section-music">
						<h2 class="subheading">listen on</h2>
						<div class="listen-on-buttons">
							<a
								href="https://open.spotify.com/track/2eBTlnsiozWMAHOnkQw0q2?si=8ac5dbebfdc24a36"
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="Spotify"
							>
								<i class="fa-brands fa-spotify"></i>
							</a>
							<a
								href="https://soundcloud.com/welcome-omocloud/toni-sai-on-my-feet-prod-remn"
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="Soundcloud"
							>
								<i class="fa-brands fa-soundcloud"></i>
							</a>
							<a
								href="https://www.youtube.com/watch?v=MSuIMOs5HXo&ab_channel=OMOcloud."
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="YouTube"
							>
								<i class="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://www.instagram.com/omocloud/"
								target="_blank"
								rel="noreferrer"
								class="button listen-button"
								aria-label="Instagram"
							>
								<i class="fa-brands fa-instagram"></i>
							</a>
						</div>
					</section>
					<section class="section-extra-content">
						<h2 class="subheading">extra content</h2>
						<div class="extra-content-embed">
							<iframe
								src="https://www.youtube.com/embed/cbcR7_Arp0A"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div class="buttons extra-content-buttons">
							<p class="third-heading">Check out OMO on these platforms</p>
							<a
								href="https://www.youtube.com/@omoweatherman"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-youtube"></i>
								<p>SAI YouTube</p>
							</a>
							<a
								href="https://www.tiktok.com/@omotoni101"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-tiktok"></i>
								<p>Toni TikTok</p>
							</a>
							<a
								href="https://www.twitch.tv/omoshin"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-twitch"></i>
								<p>Shin Twitch</p>
							</a>
						</div>
					</section>
				</div>
			</main>
			<footer class="footer">
				<a
					class="footer-link"
					href="https://www.instagram.com/omocloud/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						class="footer-logo"
						src="site-content/omologo.png"
						alt="OMO logo"
						id="footer-omo-logo"
					></img>
				</a>
			</footer>
		</div>
	);
}

// const colouricon = document.getElementById("colouricon");
// const headerlogo = document.getElementById("header-omo-logo");
// const footerlogo = document.getElementById("footer-omo-logo");

// colouricon.onclick = function () {
// 	document.body.classList.toggle("dark-theme");
// 	if (document.body.classList.contains("dark-theme")) {
// 		colouricon.src = "site-content/sun-fill.svg";
// 		headerlogo.src = "site-content/omologo-white.png";
// 		footerlogo.src = "site-content/omologo-white.png";
// 	} else {
// 		colouricon.src = "site-content/moon.svg";
// 		headerlogo.src = "site-content/omologo.png";
// 		footerlogo.src = "site-content/omologo.png";
// 	}
// };

export default Home;
