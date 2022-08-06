import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Dashboard from "./components/participants/Dahboard";
import Login from "./components/Login";
import About from "./components/About";
import Alert from "./components/Alert";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
