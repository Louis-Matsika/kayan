import "./App.css";
import "./App-queries.css";
import "./App-waiting.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NoMusic from "./pages/NoMusic";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<NoMusic />} />
			</Routes>
		</Router>
	);
}

export default App;
