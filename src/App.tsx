import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Home from './pages/Home';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <>
      <nav className="flex space-x-10 bg-black p-6 justify-center">
        <Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link>
        <Link to="/resume" className="text-gray-400 hover:text-gray-100">Resume</Link>
        <Link to="/contact" className="text-gray-400 hover:text-gray-100">Contact</Link>
        <Link to="/work" className="text-gray-400 hover:text-gray-100">Work</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      

      <footer className="bg-slate-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/angelmontes7"  target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/angelmontes7/"  target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:angelmontes7@yahoo.com"
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-6 h-6" />
                    </a>

                </div>
                <p className="text-slate-500 text-sm">
                    © 2025 Angel Montes. Crafted with care and attention to detail.
                </p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App