// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Header from "./components/Header"; // Import the Header component
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import Footer from "./components/Footer";
import About from "./components/About";
import Reservations from "./components/Reservations";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/menu" element={<Home />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<Home />} />
            <Route path="/login" element={<Home />} />
          </Routes>
        </main>
        {/* <Home /> */}

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
