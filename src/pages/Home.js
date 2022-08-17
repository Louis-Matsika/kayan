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
