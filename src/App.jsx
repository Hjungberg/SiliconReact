import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/Header";
import Fotter from "./assets/Fotter";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Features from "./views/Features"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      </main>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
