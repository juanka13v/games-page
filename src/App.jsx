import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import "./sass/main.scss";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import SingleGamePage from "./pages/SingleGamePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/game/:id" element={<SingleGamePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
