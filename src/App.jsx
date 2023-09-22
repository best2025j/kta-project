import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
