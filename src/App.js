import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Objectives from './routes/Objectives';
import B2BCompany from './routes/B2BCompany';
import Collaboration from './routes/Collaboration';
import Goals from './routes/Goals';
import GroupMembersAndExperts from './routes/GroupMembersAndExperts';
import OurTeam from './routes/OurTeam';
import Partnership from './routes/Partnership';
import Philosophy from './routes/Philosophy';
import BOD from './routes/BOD';


function App() {
  return (
    <div className="App">

      {/* <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center"> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Objectives" element={<Objectives />} />
        <Route path="/B2B-Company" element={<B2BCompany />} />
        <Route path="/Collaboration" element={<Collaboration />} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/GroupMembersAndExperts" element={<GroupMembersAndExperts />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/Philosophy" element={<Philosophy />} />
        <Route path="/BOD" element={<BOD />} />

      </Routes>
      {/* </section> */}

    </div>
  );
}

export default App;