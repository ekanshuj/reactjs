import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Error from "./components/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="React-App"
          mainSection="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route exact path="/" element={<Form heading="Text-Area" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
