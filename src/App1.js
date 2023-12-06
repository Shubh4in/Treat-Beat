import "./App1.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
{
  /*import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";*/
}

export function App() {
  const [mode, setMode] = useState("light"); //for dark mode enable or disable//
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#263238";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/*<Router>*/}
        <Navbar
          title="treat&Beat"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="about"
        />
        {/*<navbar title="treat&Beat"mode={mode} />*/}
        <Alert alert={alert} />
        <div className="container my-3">
          {/*<Routes>*/}
           {/* <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={
              */}
                <TextForm
                  showAlert={showAlert}
                  heading="INTER THE TEXT TO ANALYZE"
                  mode={mode}
                />
              {/*
            ></Route>
          </Routes>
            */}
        </div>
     {/* </Router>*/}
    </>
  );
}
export default App;
