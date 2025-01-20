import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./layouts/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className="fixed w-full">
          <Nav />
        </div>
        
        <div className='w-full md:w-3/4 lg:w-4/5 ml-auto overflow-y-auto'>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}
