import Navbar from "./components/Navbar";
import "./sass/main.scss";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
