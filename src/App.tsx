import './App.css'
import profilePic from './assets/images/profilepic.png'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import java from './assets/icons/java.png'
import python from './assets/icons/python.png'
import react from './assets/icons/react.png'
import mysql from './assets/icons/mysql.png'
import typeScript from './assets/icons/typeScript.png'
import postgres from './assets/icons/postgre.png'
import tailwindcss from './assets/icons/tailwindcss.png'
import javaScript from './assets/icons/javaScript.png'
import ProjectList from './Components/ProjectList';
import { Link } from 'react-router-dom';
import TechItem from './Components/TechItem'

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
      <section className="bg-gradient-to-t from-black to-gray-900 pt-0 pb-10">
        <div className="w-120 h-auto p-5 rounded-lg shadow-lg mx-auto m">
          <img src={profilePic} alt="Profile picture" className="w-full h-auto rounded-lg mx-auto mb-[-30px]" />
          <h2 className="text-white font-medium text-7xl text-center pb-3">I'm Angel.</h2>
          <h3 className="text-xl text-center text-gray-200 pb-3">A full-stack developer.</h3>
          <h4 className="text-md text-center text-gray-400 pb-3">
            I create web applications and mobile applications that solve real-world problems. Let's work together!
          </h4>
          <button className="border-1 border-white text-white py-2 px-5 rounded-full mt-4 block mx-auto">
            <a href="#" className="text-white hover:text-gray-600">Show Work</a>
          </button>
          <div className="flex justify-center items-center mt-5">
            <ArrowDownIcon className="h-12 w-12 text-gray-600" />
          </div>
        </div>
        
        {/* Ticker Tape Section */}
        <div className="bg-#1d1d1f p-6 rounded-lg shadow-lg mx-auto overflow-hidden relative">
          {/* Left fade gradient */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
          
          {/* Right fade gradient */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>
          
          {/* Ticker container */}
          <div className="flex justify-center items-center">
            <div className="animate-ticker whitespace-nowrap flex items-center space-x-16">
              <TechItem src={typeScript} label="TypeScript" />
              <TechItem src={javaScript} label="JavaScript" />
              <TechItem src={postgres} label="Postgres" />
              <TechItem src={java} label="Java" />
              <TechItem src={python} label="Python" />
              <TechItem src={tailwindcss} label="Tailwindcss" />
              <TechItem src={react} label="React" />
              <TechItem src={mysql} label="MySQL" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white mt-15 pb-40 max-w-7xl rounded-lg mx-auto">
        <div className="justify-center items-center text-center p-6">
          <h1 className="text-header font-medium text-5xl">Value in Technology</h1>
          <p className="pt-5 pb-20 pl-55 pr-55 text-body">
            I'm driven by a simple goal: to make a difference in people's lives. 
            I love building software that helps people solve problems and makes their day a little easier. 
            For me, it's all about creating tools that not only work well but also feel right for the people 
            who use them.
          </p>
        </div>

        {/* Flexbox container for the other three divs */}
        <div className="flex justify-between space-x-6">
          <div className="flex-1">
            <h2 className="text-header font-medium text-3xl pb-2">Work</h2>
            <p className='text-body'>
              I'm a developer who turns ideas into real, working applications. 
              I focus on making sure that the solutions I build are clear and effective, 
              while always staying open to feedback from the people I'm working with. 
              Collaboration is key—I value hearing different viewpoints to make sure we're 
              creating the best possible product.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-header font-medium text-3xl pb-2">Strategy</h2>
            <p className="text-body">
              To me, technology is about understanding people—their needs, 
              their challenges, and what they want to accomplish. By learning more 
              about the people using what we build, I can create solutions that are both 
              practical and thoughtful, giving us a solid foundation for moving forward together.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-header font-medium text-3xl pb-2">Leadership</h2>
            <p className='text-body'>
              I believe that leadership isn't about giving orders; it's about helping others grow. 
              I focus on building a supportive, collaborative environment where everyone feels empowered 
              to share ideas and take ownership of their work. When people feel encouraged and trusted, 
              they do their best work.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black pr-30 pl-30 pb-30 pt-20 ">
        <div>
          <h1 className="text-white font-medium text-4xl pb-10 w-1/2"><span className="text-dark-gray">I have worked as a</span> software engineer <span className="text-dark-gray"> in many </span> innovative projects:</h1>
            <ProjectList />
        </div>
      </section>

      <footer className="bg-black text-gray-400 text-center p-6 mt-10">
        © 2025 Angel Montes. All rights reserved.
      </footer>
    </>
  )
}

export default App