import React from "react";
import Overview from "./components/Overview";
import CountPlot from "./components/CountPlot.jsx";
// import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <Overview />
      <CountPlot />
    </div>
  );
}

export default App;
