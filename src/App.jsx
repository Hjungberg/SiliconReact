import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/Header";
import Fotter from "./assets/Fotter";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Features from "./views/Features"
import SignIn from "./views/SignIn"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      </main>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
