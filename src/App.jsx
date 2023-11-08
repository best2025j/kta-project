// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Navigation from "./components/layout/Navigation";
import WebDevelopment from "./pages/courses/WebDevelopment";
import DesignAnimation from "./pages/courses/DesignAnimation";
import DataAnalytics from "./pages/courses/DataAnalytics";
import CyberSecurity from "./pages/courses/CyberSecurity";
import VA_RemoteJobs from "./pages/courses/VA_RemoteJobs";
import DigitalMarketting from "./pages/courses/DigitalMarketting";
import ContentWritting from "./pages/courses/ContentWritting";
import UI_UX from "./pages/courses/UI_UX";

const App = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/web-development" element={<WebDevelopment />} />
        <Route path="/courses/design-animation" element={<DesignAnimation />} />
        <Route path="/courses/ui-ux" element={<UI_UX />} />
        <Route path="/courses/data-analytics" element={<DataAnalytics />} />
        <Route path="/courses/cyber-security" element={<CyberSecurity />} />
        <Route path="/courses/va-remote-jobs" element={<VA_RemoteJobs />} />
        <Route
          path="/courses/digital-marketing"
          element={<DigitalMarketting />}
        />
        <Route path="/courses/content-writing" element={<ContentWritting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
