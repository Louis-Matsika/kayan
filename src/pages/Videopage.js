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
              src="https://www.youtube.com/embed/ik4pDfveVn0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
          <section class="section-title">
            <p class="song-title title">Phases</p>
            <p class="artists title">omo Toni (ft. SAI's fate.)</p>
          </section>
          <section class="section-buttons">
            <p class="subheading">listen on</p>
            <div class="buttons">
              <a
                href="https://open.spotify.com/track/4fjP2ztoeLmp6b0ND9VTCl?si=28c70d34b85d4774"
                target="_blank"
                class="button"
                aria-label="Spotify"
              >
                <i class="fa-brands fa-spotify"></i>
              </a>
              <a
                href="https://soundcloud.com/welcome-omocloud/phases"
                target="_blank"
                class="button"
                aria-label="Soundcloud"
              >
                <i class="fa-brands fa-soundcloud"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=ik4pDfveVn0&ab_channel=OMOcloud."
                target="_blank"
                class="button"
                aria-label="YouTube"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/omocloud/"
                target="_blank"
                class="button"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-instagram"></i>
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
