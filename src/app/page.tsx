
import Header from "#/components/Header/Header";
import Lobby from '#/components/Lobby';
import Footer from "#/components/Footer/Footer";

import "#theme/global.scss";

const Home=()=> {
  return (
    <div>
      <Header />
      <Lobby />
      <Footer />
    </div>
  );
}

export default Home;
