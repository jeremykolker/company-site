import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={Home} />
            <Route exact path="/projects" element={Projects} />
            <Route exact path="/projects/:id" element={ProjectDetails} />
            <Route element={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

