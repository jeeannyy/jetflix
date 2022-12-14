import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/jeflix" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId" element={<Home />} />
      <Route path="https://jeeanny.github.io/moviesite" element={<Home />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </Router>
  );
}

export default App;