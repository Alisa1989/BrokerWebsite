import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Buy from './components/Buy';
import Sell from './components/Sell/Sell';

function App() {
  return (
      <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Buy" element={<Buy />} />
          <Route exact path="/Sell" element={<Sell />} />
        </Routes>
        <Footer />
    </div>
      </Router>
  );
}

export default App;
