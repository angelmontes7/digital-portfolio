import React from 'react';
import { ArrowUp } from 'lucide-react';

const projects = [
{
    title: 'Insightify',
    date: 'April 2023',
    description: 'Web page that allows SignUp/LoginIn. Hosts two google chrome extensions that web scrapes email address or blocks ads when activated. Built with HTML, CSS, JavaScript',
    image: '',
},
{
    title: 'Kwon Kasino',
    date: 'November 2024',
    description: 'A fun casino web game application.',
    image: '',
},
{
    title: 'Blackjack',
    date: 'December 2024',
    description: 'Classic Multiplayer Blackjack game. Built with HTML, CSS, JavaScript',
    image: '',
},
{
    title: 'OpenPlay',
    date: 'May 2025',
    description: 'Sports location tracker and wager system. Built with Expo, React-Native, TypeScript',
    image: '',
},
{
    title: 'UK Road Accident Analysis',
    date: 'June 2025',
    description: 'Data analysis dashboard focused on road accident trends in the UK. Built with Power BI and Powerpoint',
    image: '',
},
{
    title: 'Digital Portfolio',
    date: 'June 2025',
    description: 'Personal portfolio showcasing projects and skills. Built with React, TypeScript, React, Tailwindcss',
    image: '',
},
{
    title: 'Betalyze',
    date: 'June 2025',
    description: 'Sports betting analysis and prediction tool with machine learning integration. Built with Java, Python, React, TypeScript',
    image: '',
},
{
    title: 'SalesTracker Pro',
    date: 'July 2025',
    description: 'A comprehensive sales tracking dashboard with real-time analytics. Built with Django, TypeScript, Python, React',
    image: '',
},
  
];

const Work = () => {
  return (
    <>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 left-1/2 w-12 h-12 bg-pink-400/20 rounded-full animate-ping"></div>
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
                    }} />
            ))}
        </div>
        <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-blue-900 min-h-screen py-10 text-white space-y-10">
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-11/12 max-w-3xl flex flex-col md:flex-row md:items-center gap-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                        <div className="w-full md:w-1/3 h-40 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                            {/* Image Placeholder */}
                            Image
                        </div>
                        <div className="flex-1 space-y-3">
                            <h2 className="text-2xl font-bold text-purple-400">{project.title}</h2>
                            <p className="text-sm text-gray-400">{project.date}</p>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                    </div>
                    {index !== projects.length && index !== 0 && (
                        <ArrowUp className="text-purple-400 animate-bounce" size={36} />
                    )}
                </React.Fragment>
            )).reverse()}
        </div>
    </>
  );
};

export default Work;