import React from "react";

function NoMusic() {
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
						<h1 class="song-title title">UNDERWORLD ep.1</h1>
						<p class="artists title">remn.</p>
					</section>
					<section class="section-music">
						<h2 class="subheading">find us</h2>
						<div class="listen-on-full-buttons full-text-buttons">
							<a
								href="https://www.instagram.com/omoremn/"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-instagram"></i>
								<p>Instagram</p>
							</a>
							<a
								href="https://www.youtube.com/@OMOweatherstation"
								target="_blank"
								rel="noreferrer"
								class="button extra-content-button"
							>
								<i class="fa-brands fa-youtube"></i>
								<p>YouTube</p>
							</a>
						</div>
					</section>
				</div>
			</main>
			<footer class="footer">
				{/* <a
					class="footer-link"
					href="https://www.instagram.com/omocloud/"
					target="_blank"
					rel="noreferrer"
				>
				</a> */}
				<img
					class="footer-logo"
					src="site-content/omologo.png"
					alt="OMO logo"
					id="footer-omo-logo"
				></img>
				<img
					class="footer-logo"
					src="site-content/weatherstation_logo.png"
					alt="OMO logo"
					id="footer-omo-logo"
				></img>
			</footer>
		</div>
	);
}

export default NoMusic;
