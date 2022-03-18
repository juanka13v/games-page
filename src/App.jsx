import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleGamePage from "./pages/SingleGamePage";
import Error from "./components/Error";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<SingleGamePage />} />
        <Route path="/test" element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
