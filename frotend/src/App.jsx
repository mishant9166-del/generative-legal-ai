import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./app.css";
import Footer from "./components/footer";
import Assistant from "./components/AI-Section";
import DemoSection from "./components/domo-section"; 
import FeatureSection from "./components/feature-section"; 
import Header from "./components/header"; 
import MainSection from "./components/mainsection";
import HelpSection from "./components/help-section";

function App() {
  const [helpVisible, setHelpVisible] = useState(false);

  const toggleHelp = () => {
    setHelpVisible(!helpVisible);
  };

  return (
    <>
      <div className="bg-light text-dark" >
        <Header toggleHelp={toggleHelp} />
        <MainSection toggleHelp={toggleHelp} />
        {helpVisible && <HelpSection toggleHelp={toggleHelp}/>}
        <FeatureSection />
        <DemoSection toggleHelp={toggleHelp} />
        <Assistant />
        <Footer />
      </div>
    </>
  );
}
export default App;
