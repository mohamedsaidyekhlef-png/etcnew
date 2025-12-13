import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/layout/CookieBanner';
import { ChatWidget } from './components/chat/ChatWidget'; // Import ChatWidget
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Associates } from './pages/Associates';
import { Seminars } from './pages/Seminars';
import { Initialize } from './pages/Initialize';
import { CaseStudy } from './pages/CaseStudy';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-charcoal bg-void">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/associates" element={<Associates />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seminars" element={<Seminars />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/initialize" element={<Initialize />} />
            <Route path="/case-study" element={<CaseStudy />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <ChatWidget /> {/* Add ChatWidget here */}
      </div>
    </Router>
  );
}

export default App;
