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
            src="site-content/omologo.png"
            alt="OMO logo"
            class="header-logo"
          ></img>
        </a>
      </header>
      <main class="main-content">
        <div class="main-column">
          <section class="section-logo">
            <img
              src="site-content/toni_phases.jpg"
              alt="Artwork for 'Phases', a song by omo Toni"
              class="main-logo"
            ></img>
          </section>
          <section class="section-title">
            <p class="song-title title">Phases</p>
            <p class="artists title">omo Toni ft. SAI's fate.</p>
          </section>
          <section class="section-buttons">
            <p class="subheading">listen on</p>
            <a
              href="https://open.spotify.com/track/4fjP2ztoeLmp6b0ND9VTCl?si=0ad50d3ed2df4e65&nd=1"
              target="_blank"
              class="button"
            >
              <span>Spotify</span>
              <i class="fa-brands fa-spotify"></i>
            </a>
            <a
              href="https://soundcloud.com/welcome-omocloud/phases?si=098dc4291db04c92a739621ab9a5f6f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
              class="button"
            >
              <span>Soundcloud</span>
              <i class="fa-brands fa-soundcloud"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=cSwOvy3itgg&list=OLAK5uy_kzFv4Ez9FA2vP3Thu_3Lw-LaO72W6TuDs&ab_channel=omoToni-Topic"
              target="_blank"
              class="button"
            >
              <span>YouTube</span>
              <i class="fa-brands fa-youtube"></i>
            </a>
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
            src="site-content/omologo.png"
            alt="OMO logo"
          ></img>
        </a>
      </footer>
    </div>
  );
}

export default Home;
