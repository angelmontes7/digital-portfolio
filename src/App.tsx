import './App.css'
import profilePic from './assets/images/profilepic.png'

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
        </div>
      </section>
    </>
  )
}

export default App
