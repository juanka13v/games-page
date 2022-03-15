import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import "./sass/main.scss";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import SingleGame from "./components/SingleGame";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/single-game" element={<SingleGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
