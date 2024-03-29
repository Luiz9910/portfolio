import React from "react";
import "./App.css";
import Header from "./components/comom/Header/Header";
import Apresentation from "./components/section/Inital/Apresentation";
import About from "./components/section/About/About";
import Project from "./components/section/Project/Project";
import Skill from "./components/section/Skill/Skill";
import ContactForm from "./components/section/ContactForm/ContactForm";
import Footer from "./components/comom/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          <Apresentation />
          <About />
          <Project />
          <Skill />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
