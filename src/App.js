import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Footer />
      </div>} />
        <Route path="/contact" element={<div className="contact-page">
            <Contact />
          <Footer />
        </div>} />
      </Routes>
    </Router>
  );
}
