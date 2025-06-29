import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDo from "./components/ToDo";
import CoinTracker from "./components/CoinTracker";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Movie from "./components/Movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
