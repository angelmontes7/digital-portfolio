import Card from './Card';
import java from '../assets/icons/java.png'
import python from '../assets/icons/python.png'
import react from '../assets/icons/react.png'
import typeScript from '../assets/icons/typeScript.png'
import postgres from '../assets/icons/postgre.png'
import javaScript from '../assets/icons/javaScript.png'
import mysql from '../assets/icons/mysql.png'
import openplay from '../assets/images/openplay.png'
import insightify from '../assets/images/insightify.png'
import favicon from '../assets/icons/favicon.png'
import ukroadimage from '../assets/images/ukroadimage.png'
import blackjack from '../assets/images/blackjack.png'

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      language: 'TypeScript, React-Native, PostgreSQL, TailwindCSS',
      projectName: 'OpenPlay',
      description: 'Mobile wagering application with real-time betting features and secure payment integration',
      image: openplay,
      category: 'Mobile Development',
      status: 'Completed',
      techStack: ['TypeScript', 'React Native', 'PostgreSQL', 'TailwindCSS'],
      highlights: ['Real-time betting', 'Secure payments', 'Cross-platform'] 
    },
    {
      id: 2,
      language: 'TypeScript, React, TailwindCSS',
      projectName: 'Digital-Portfolio',
      description: 'Responsive personal portfolio showcasing projects and professional experience',
      image: favicon,
      category: 'Web Development',
      status: 'pending',
      techStack: ['TypeScript', 'React', 'TailwindCSS'],
      highlights: ['Responsive design', 'Modern UI', 'Performance optimized']
    },
    {
      id: 3,
      language: 'JavaScript, HTML, CSS, MongoDB, WebSockets',
      projectName: 'BlackJack',
      description: 'Real-time multiplayer blackjack game with live chat and betting mechanics',
      image: blackjack,
      category: 'Game Development',
      status: 'Completed',
      techStack: ['JavaScript', 'HTML', 'CSS', 'MongoDB', 'WebSockets'],
      highlights: ['Real-time multiplayer', 'Live chat', 'Betting system']
    },
    {
      id: 4,
      language: 'JavaScript, HTML, EJS, CSS',
      projectName: 'Insightify',
      description: 'Chrome extension with companion web application for enhanced browsing analytics',
      image: insightify,
      category: 'Browser Extension',
      status: 'Completed',
      techStack: ['JavaScript', 'HTML', 'EJS', 'CSS'],
      highlights: ['Browser extension', 'Analytics dashboard', 'User insights']
    },
    {
      id: 5,
      language: 'MySQL, Java',
      projectName: 'UKRoadAccidentAnalysis',
      description: 'This dashboard provides valuable insights into road accidents in the UK for the years 2021 and 2022.',
      image: ukroadimage,
      category: 'Data Analysis',
      status: 'Completed',
      techStack: ['PowerBI', 'MySQL', 'PowerPoint'],
      highlights: ['Complex relationships', 'Data integrity', 'Data Analysis', 'Presentation']
    },
    {
      id: 6,
      language: 'Java, Python',
      projectName: 'Betalyze',
      description: 'AI sports predictor',
      image: java,
      category: 'Machine Learning',
      status: 'Completed',
      techStack: ['Java', 'Python'],
      highlights: ['Machine learning', 'Sports analytics', 'Prediction algorithms']
    },

  ];
  
  const categories = [...new Set(projects.map(p => p.category))];
  const uniqueTech = [...new Set(projects.flatMap(p => p.techStack))];

  return (
    <section className="py-20 text-white bg-[radial-gradient(circle_at_center,_#1f2937,_#111827,_#000000)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-white">My Work</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A selection of software projects I've built — from AI to mobile development.
          </p>
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 text-center">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            <div className="text-4xl font-bold text-purple-400">{projects.length}</div>
            <div className="text-gray-300 mt-2">Projects</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            <div className="text-4xl font-bold text-green-400">{categories.length}</div>
            <div className="text-gray-300 mt-2">Domains</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            <div className="text-4xl font-bold text-blue-400">{uniqueTech.length}</div>
            <div className="text-gray-300 mt-2">Technologies</div>
          </div>
        </div>

        {/* Project Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card
              key={project.id}
              language={project.language}
              projectName={project.projectName}
              description={project.description}
              image={project.image}
              category={project.category}
              status={project.status}
              techStack={project.techStack}
              highlights={project.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
