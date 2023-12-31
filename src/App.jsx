import React from "react";
import "./App.css";
import Header from "./components/comom/Header/Header";
import Apresentation from "./components/section/Inital/Apresentation";
import About from "./components/section/About/About";
import Project from "./components/section/Project/Project";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          <Apresentation />
          <About />
          <Project />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
