import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Playbook from './pages/Playbook';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Home from './pages/Home';

function App() {
  return (
    <>
      <nav className="flex space-x-10 bg-black p-6 justify-center">
        <Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link>
        <Link to="/resume" className="text-gray-400 hover:text-gray-100">Resume</Link>
        <Link to="/playbook" className="text-gray-400 hover:text-gray-100">Playbook</Link>
        <Link to="/contact" className="text-gray-400 hover:text-gray-100">Contact</Link>
        <Link to="/work" className="text-gray-400 hover:text-gray-100">Work</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/playbook" element={<Playbook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      

      <footer className="bg-black text-gray-400 text-center p-6 mt-10">
        © 2025 Angel Montes. All rights reserved.
      </footer>
    </>
  )
}

export default App