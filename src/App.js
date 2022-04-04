import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/BlogCard";
import BigCard from "./components/BigCard";
import HeroPage from "./components/HeroPage";
import React, { Component } from "react";

//Routing Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import BlogSection from "./routes/BlogSection";
import DesignSection from "./routes/DesignSection";
import ArtworkSection from "./routes/ArtworkSection";
import Blog from "./routes/Blog";

//Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Style Imports
import "./Stylesheet/main.css";

library.add(faBars, faX, faXmark);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BlogSection" element={<BlogSection />} />
          <Route path="/DesignSection" element={<DesignSection />} />
          <Route path="/ArtworkSection" element={<ArtworkSection />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </main>
      <FontAwesomeIcon icon="coffee" />
      <Footer />
    </>
  );
}

export default App;
