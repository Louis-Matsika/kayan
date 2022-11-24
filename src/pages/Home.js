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
              src="site-content/chosen.jpg"
              alt="Cover for 'chosen.', a song by SAI's fate."
              class="main-pic"
            ></img>
          </section>
          <section class="section-title">
            <p class="song-title title">chosen.</p>
            <p class="artists title">SAI's fate.</p>
          </section>
          <section class="section-buttons">
            <p class="subheading">listen on</p>
            <div class="buttons">
              <a
                href="https://open.spotify.com/track/5HWTg9T4L3cjxjfR7LSPyZ?si=2461e437b28747c4"
                target="_blank"
                class="button"
                aria-label="Spotify"
              >
                <i class="fa-brands fa-spotify"></i>
              </a>
              <a
                href="https://soundcloud.com/welcome-omocloud/sais-fate-chosen-prod-remn?si=9dcaab94c3934629aaeac057b2bc5664&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="_blank"
                class="button"
                aria-label="SoundCloud"
              >
                <i class="fa-brands fa-soundcloud"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=J-6UMZPBMes&ab_channel=SAI%27sfate.-Topic"
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
