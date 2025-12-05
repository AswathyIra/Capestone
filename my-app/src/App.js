// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Header from "./components/Header"; // Import the Header component

import Home from "./components/Home"; // Import the Home component
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
