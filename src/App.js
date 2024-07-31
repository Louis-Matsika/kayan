import "./App.css";
import "./components/OMOcloud/OMOcloud.css";
import "./App-queries.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import of all needed pages for kayan
import Layout from "./pages/Layout";
import Lobby from "./pages/Lobby";
import Info from "./pages/Info";
import NoPage from "./pages/NoPage";
// import all OMOcloud members
import SaiPage from "./pages/Members/SAI";
import ShinPage from "./pages/Members/Shin";
import ToniPage from "./pages/Members/Toni";
import XyletPage from "./pages/Members/Xylet";
import EskimoPage from "./pages/Members/Eskimo";
import BakuraPage from "./pages/Members/Bakura";
import LossPage from "./pages/Members/LOSS";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* "Layout" is the nav bar  */}
				<Route path="/" element={<Layout />}>
					{/* "Lobby" is the defualt page */}
					<Route index element={<Lobby />} />

					{/* all other accessible kayan pages listed below */}
					<Route path="SAI" element={<SaiPage />} />
					<Route path="Shin" element={<ShinPage />} />
					<Route path="Toni" element={<ToniPage />} />
					<Route path="Xylet" element={<XyletPage />} />
					<Route path="Eskimo" element={<EskimoPage />} />
					<Route path="Bakura" element={<BakuraPage />} />
					<Route path="LOSS" element={<LossPage />} />
					<Route path="Info" element={<Info />} />
					{/* "*" is the 404 page */}
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
