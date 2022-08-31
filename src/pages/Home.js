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
            <img
              src="site-content/off-white.jpg"
              alt="Artwork for 'Phases', a song by omo Toni"
              class="main-pic"
            ></img>
          </section>
          <section class="section-title">
            <p class="song-title title">off white.</p>
            <p class="artists title">SAI's fate.</p>
          </section>
          <section class="section-buttons">
            <p class="subheading">listen on</p>
            <div class="buttons">
              <a
                href="https://open.spotify.com/track/4I7LDeeIW9Js1qJm4dY77t?si=5e7a3cb7b7484d72"
                target="_blank"
                class="button"
              >
                <i class="fa-brands fa-spotify"></i>
              </a>
              <a
                href="https://soundcloud.com/welcome-omocloud/offwhite?si=0c99217c77194ea796b56c66d7f678dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="_blank"
                class="button"
              >
                <i class="fa-brands fa-soundcloud"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=KzdVMNXn7BI&list=OLAK5uy_k0NVP5uKfj4xoHL9_myg_7DncFb9AP9gU&ab_channel=SAI%27sfate.-Topic"
                target="_blank"
                class="button"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/omocloud/"
                target="_blank"
                class="button"
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
