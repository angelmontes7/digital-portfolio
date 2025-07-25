import profilePic from '../assets/images/profilepic.png'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import java from '../assets/icons/java.png'
import python from '../assets/icons/python.png'
import react from '../assets/icons/react.png'
import mysql from '../assets/icons/mysql.png'
import typeScript from '../assets/icons/typeScript.png'
import postgres from '../assets/icons/postgre.png'
import tailwindcss from '../assets/icons/tailwindcss.png'
import javaScript from '../assets/icons/javaScript.png'
import ProjectList from '../Components/ProjectList';
import TechItem from '../Components/TechItem'

const Home = () => {
    return (
        <>
            <section className="bg-gradient-to-t from-black to-gray-900 pt-0 pb-10">
                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                    ))}
                </div>
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
            <section className="bg-white pb-80 pt-40 max-w-7xl rounded-lg mx-auto">
                <div className="justify-center items-center text-center p-6">
                <h1 className="text-header font-medium text-8xl">Value in Technology</h1>
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
                    <h2 className="text-header font-medium text-4xl pb-2">Work</h2>
                    <p className='text-body'>
                    I'm a developer who turns ideas into real, working applications. 
                    I focus on making sure that the solutions I build are clear and effective, 
                    while always staying open to feedback from the people I'm working with. 
                    Collaboration is key—I value hearing different viewpoints to make sure we're 
                    creating the best possible product.
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-header font-medium text-4xl pb-2">Strategy</h2>
                    <p className="text-body">
                    To me, technology is about understanding people—their needs, 
                    their challenges, and what they want to accomplish. By learning more 
                    about the people using what we build, I can create solutions that are both 
                    practical and thoughtful, giving us a solid foundation for moving forward together.
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-header font-medium text-4xl pb-2">Leadership</h2>
                    <p className='text-body'>
                    I believe that leadership isn't about giving orders; it's about helping others grow. 
                    I focus on building a supportive, collaborative environment where everyone feels empowered 
                    to share ideas and take ownership of their work. When people feel encouraged and trusted, 
                    they do their best work.
                    </p>
                </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black to-gray-900 pr-30 pl-30 pb-30 pt-20 relative overflow-hidden">
                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                    ))}
                </div>

                {/* Project content */}
                <div className="relative z-10">
                    <h1 className="text-white font-medium text-4xl pb-10 w-1/2">
                        <span className="text-dark-gray">I have worked as a</span> software engineer{' '}
                        <span className="text-dark-gray"> in many </span> innovative projects:
                    </h1>
                    <ProjectList />
                </div>
            </section>
        </>
    );
}

export default Home;
