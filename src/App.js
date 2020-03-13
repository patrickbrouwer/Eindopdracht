import React from "react";
import "./App.css";
import ButtonNames from "./Components/ButtonNames";
import Chart from "./Components/Chart";
import Student from "./Components/Student";

function App() {
  return (
    <div className="App">
      <header className="App-header">Student Dashboard</header>
      <nav>
        <div className="ButtonsName">
          <ButtonNames />
        </div>
      </nav>
      <Chart />

      <Student />
    </div>
  );
}

export default App;
