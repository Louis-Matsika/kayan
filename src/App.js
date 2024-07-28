import "./App.css";
import "./components/OMOcloud/OMOcloud.css";
import "./App-queries.css";
import "./App-waiting.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Lobby from "./pages/Lobby";
import Info from "./pages/Info";
import NoPage from "./pages/NoPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Lobby />} />
					<Route path="Info" element={<Info />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
