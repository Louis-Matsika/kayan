import React from "react";

function Home() {
  return (
    <div>
      <header class="header">
        <a
          href="https://www.instagram.com/omocloud/"
          target="_blank"
          class="header-link"
        >
          <img
            src="site-content/omologo-white.png"
            alt="OMO logo"
            class="header-logo"
          ></img>
        </a>
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
                class="button listen-button"
                aria-label="Spotify"
              >
                <i class="fa-brands fa-spotify"></i>
              </a>
              <a
                href="https://soundcloud.com/welcome-omocloud/toni-sai-on-my-feet-prod-remn"
                target="_blank"
                class="button listen-button"
                aria-label="Soundcloud"
              >
                <i class="fa-brands fa-soundcloud"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=MSuIMOs5HXo&ab_channel=OMOcloud."
                target="_blank"
                class="button listen-button"
                aria-label="YouTube"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/omocloud/"
                target="_blank"
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
              <p class="third-heading">still extra content</p>
              <a
                href="https://www.twitch.tv/omoweatherman"
                target="_blank"
                class="button extra-content-button"
              >
                <i class="fa-brands fa-twitch"></i>
                <p>SAI Twitch</p>
              </a>
              <a
                href="https://www.tiktok.com/@saisfate"
                target="_blank"
                class="button extra-content-button"
              >
                <i class="fa-brands fa-tiktok"></i>
                <p>SAI tiktok</p>
              </a>
              <a
                href="https://www.tiktok.com/@omotoni101"
                target="_blank"
                class="button extra-content-button"
              >
                <i class="fa-brands fa-tiktok"></i>
                <p>TONI tiktok</p>
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
        >
          <img
            class="footer-logo"
            src="site-content/omologo-white.png"
            alt="OMO logo"
          ></img>
        </a>
      </footer>
    </div>
  );
}

export default Home;