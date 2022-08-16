import React from "react";

function Home() {
  return (
    <div>
      <header class="header">
        <a href="#">
          <img
            src="site-content/omologo.png"
            alt="Logo"
            class="header-logo"
          ></img>
        </a>
      </header>
      <main class="main-content">
        <section class="section-logo">
          <img
            src="site-content/toni_phases.png"
            alt="Logo"
            class="main-logo"
          ></img>
        </section>
        <section class="section-title">
          <h1 class="main-title">omo Toni - 'Phases' ft. SAI's fate.</h1>
          <p class="subheading">available everywhere now</p>
        </section>
        <section class="section-button">
          <a
            href="https://www.youtube.com/channel/UCOiVt80wJ2Nq7rcWIN4LJGg"
            target="_blank"
            class="button"
          >
            Listen on spotify
          </a>
        </section>
      </main>
    </div>
  );
}

export default Home;
