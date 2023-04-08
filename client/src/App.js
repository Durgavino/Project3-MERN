import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">

      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
        <Navbar />
          <div className="container">
            <Routes>
              {/* Define routes to render different page components at different paths */}
              <Route path="/" element={<About />} />
              {/* Define routes to render different page components at different paths */}
              <Route path="/home" element={<Home />} />
             
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
