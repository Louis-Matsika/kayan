import "./App.css";
import "./App-queries.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Videopage from "./pages/Videopage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Videopage />} />
      </Routes>
    </Router>
  );
}

export default App;
