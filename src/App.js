import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import About from "./components/About";
import Error from "./components/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "Success!");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "Success!");
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
        <Alert alert={alert} />
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
