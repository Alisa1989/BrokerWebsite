import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Geography from "./components/Geography";
import Sacramento from "./components/Geography/Sacramento";
import ElDorado from "./components/Geography/ElDorado";
import Placer from "./components/Geography/Placer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Buy" element={<Buy />} />
          <Route exact path="Sell" element={<Sell />} />
          <Route exact path="Regions" element={<Geography />}>
            <Route exact path="El-Dorado-County" element={<ElDorado />} />
            <Route exact path="Sacramento-County" element={<Sacramento />} />
            <Route exact path="Placer-County" element={<Placer />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
