import React from "react";

function Home() {
  return (
    <div>
      <header class="header">
        <img
          src="site-content/omologo.png"
          alt="OMO logo"
          class="header-logo"
        ></img>
      </header>
      <main class="main-content">
        <div class="main-column">
          <section class="section-logo">
            <img
              src="site-content/toni_phases.png"
              alt="Artwork for 'Phases', a song by omo Toni"
              class="main-logo"
            ></img>
          </section>
          <section class="section-title">
            <p class="song-title title">Phases</p>
            <p class="artists title">
              omo Toni <span class="extra-credits2">ft. SAI's fate.</span>
            </p>
          </section>
          <section class="section-buttons">
            <p class="subheading">listen on</p>
            <a
              href="https://www.youtube.com/channel/UCOiVt80wJ2Nq7rcWIN4LJGg"
              target="_blank"
              class="button"
            >
              <span>Spotify</span>
              <i class="fa-brands fa-spotify"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCOiVt80wJ2Nq7rcWIN4LJGg"
              target="_blank"
              class="button"
            >
              <span>Soundcloud</span>
              <i class="fa-brands fa-soundcloud"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCOiVt80wJ2Nq7rcWIN4LJGg"
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
        <img
          src="site-content/omologo.png"
          alt="OMO logo"
          class="footer-logo"
        ></img>
      </footer>
    </div>
  );
}

export default Home;
