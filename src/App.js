import "./App.css";
import "./App-queries.css";
import "./App-waiting.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
import Waiting from "./pages/Waiting";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Waiting />} />
			</Routes>
		</Router>
	);
}

export default App;
