import PreviousMap from "postcss/lib/previous-map";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextBox from "./textArea";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = (props) => {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242B2E";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title={"Utilities"}
          home={"Home"}
          dropdown={"Check Out"}
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={<TextBox heading="Enter text" mode={mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
