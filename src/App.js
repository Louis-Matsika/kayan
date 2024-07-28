import "./App.css";
import "./components/OMOcloud/OMOcloud.css";
import "./App-queries.css";
import "./App-waiting.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import of all needed pages for kayan
import Layout from "./pages/Layout";
import Lobby from "./pages/Lobby";
import Info from "./pages/Info";
import NoPage from "./pages/NoPage";
import SAIpage from "./pages/Members/SAI";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* "Layout" is the nav bar  */}				
				<Route path="/" element={<Layout />}>

					{/* "Lobby" is the defualt page */}
					<Route index element={<Lobby />} />

					{/* all other accessible kayan pages listed below */}
					<Route path="SAI" element={<SAIpage />} />
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
