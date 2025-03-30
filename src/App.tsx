import './App.css'
import profilePic from './assets/images/profilepic.png'
import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
function App() {
  return (
    <>
      <nav className="flex space-x-10 bg-black p-6 justify-center">
        <a href="#" className="text-gray-400 hover:text-gray-100">Home</a>
        <a href="#" className="text-gray-400 hover:text-gray-100">Resume</a>
        <a href="#" className="text-gray-400 hover:text-gray-100">Playbook</a>
        <a href="#" className="text-gray-400 hover:text-gray-100">Contact</a>
        <a href="#" className="text-gray-400 hover:text-gray-100">Work</a>
      </nav>
      <section className="bg-gradient-to-t from-black to-gray-900 pt-0 pb-10">
        <div className="w-120 h-auto p-6 rounded-lg shadow-lg mx-auto">
          <img 
            src={profilePic} 
            alt="Profile picture"
            className="w-full h-auto rounded-lg mx-auto"
          />
          <h2 className="text-3xl text-center mt-0">I'm Angel</h2>
          <h3 className="text-xl text-center text-gray-200">A full-stack developer.</h3>
          <h4 className="text-md text-center text-gray-400 mt-2">
            I create web applications and mobile applications that solve real-world problems.
            Let's work together!
          </h4>
          <button className="border-1 border-white text-white py-2 px-5 rounded-full mt-4 block mx-auto">
            <a href="#" className="text-white hover:text-gray-600">Show Work</a>
          </button>
          <div className="flex justify-center items-center mt-5">
            <ArrowDownIcon className="h-12 w-12 text-gray-600" />
          </div>
          

        </div>
      </section>
    </>
  )
}

export default App
