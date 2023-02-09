import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";
import SocialsFooter from "./components/SocialsFooter";
import Gallery from "./components/Gallery";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Routes>
          <Route path="/" element={<SubNav title="Movies" />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Gallery query="harry potter" />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Gallery query="comedy" />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Gallery query="fiction" />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Gallery query="friends" />} />
        </Routes>
        <Routes>
          <Route path="tv-shows" element={<SubNav title="TV-Shows" />} />
        </Routes>
        <Routes>
          <Route path="tv-shows" element={<Gallery query="friends" />} />
        </Routes>
        <Routes>
          <Route path="tv-shows" element={<Gallery query="money heist" />} />
        </Routes>
        <Routes>
          <Route path="movie-details/:id" element={<MovieDetails />} />
        </Routes>
        <SocialsFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
