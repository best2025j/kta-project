import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import DigitalMarketing from "./pages/courses/DigitalMarketing";
import ContentWriting from "./pages/courses/ContentWriting";
import UI_UX from "./pages/courses/UI_UX";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
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
          element={<DigitalMarketing />}
        />
        <Route path="/courses/content-writing" element={<ContentWriting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
