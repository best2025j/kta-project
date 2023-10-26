import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Navigation from "./components/layout/Navigation";
import WebDevelopment from "./components/courses/WebDevelopment";
import DataAnalytics from "./components/courses/DataAnalytics";
import CyberSecurity from "./components/courses/CyberSecurity";
import VA_RemoteJobs from "./components/courses/VA_RemoteJobs";
import DigitalMarketting from "./components/courses/DigitalMarketting";
import ContentWritting from "./components/courses/ContentWritting";
import DesignAnimation from "./components/courses/DesignAnimation";
import UI_UX from "./components/courses/UI_UX";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:name" element={<WebDevelopment />} />
        <Route path="/course/:name" element={<DesignAnimation />} />
        <Route path="/course/:name" element={<UI_UX />} />
        <Route path="/course/:name" element={<DataAnalytics />} />
        <Route path="/course/:name" element={<CyberSecurity />} />
        <Route path="/course/:name" element={<VA_RemoteJobs />} />
        <Route path="/course/:name" element={<DigitalMarketting />} />
        <Route path="/course/:name" element={<ContentWritting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
