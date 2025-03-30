import Card from './Card';
import java from '../assets/icons/java.png'
import python from '../assets/icons/python.png'
import react from '../assets/icons/react.png'
import typeScript from '../assets/icons/typeScript.png'
import postgres from '../assets/icons/postgre.png'
import javaScript from '../assets/icons/javaScript.png'
import mysql from '../assets/icons/mysql.png'

const ProjectList = () => {
  const projects = [
    {
      language: 'TypeScript',
      projectName: 'OpenPlay',
      description: 'Mobile Wager App',
      image: typeScript, // Add image URL here
    },
    {
      language: 'TypeScript',
      projectName: 'Digital-Portfolio',
      description: 'Task Management App',
      image: react, // Add image URL here
    },
    {
      language: 'JavaScript',
      projectName: 'BlackJack',
      description: 'Two-Player gambling game',
      image: javaScript, // Add image URL here
    },
    {
      language: 'JavaScript',
      projectName: 'Insightify',
      description: 'Google-extension host web-app',
      image: javaScript, // Add image URL here
    },
    {
      language: 'MySQL',
      projectName: 'KwonKasino',
      description: 'Database storing complex relationship',
      image: mysql, // Add image URL here
    },
    {
      language: 'JavaScript',
      projectName: 'Filler',
      description: 'Task Management App',
      image: python, // Add image URL here
    },
    // Add more projects with images here...
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <Card
          key={index}
          language={project.language}
          projectName={project.projectName}
          description={project.description}
          image={project.image}  // Pass image URL to Card
        />
      ))}
    </div>
  );
};

export default ProjectList;
