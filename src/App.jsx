import React from "react";
import "./App.css";
import Header from "./components/comom/Header/Header";
import Apresentation from "./components/section/Inital/Apresentation";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          <Apresentation />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
