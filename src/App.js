import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
