import '../App.css'

type CardProps = {
    language: string;
    projectName: string;
    description: string;
    image: string;  // New prop for the image URL
  };
  
  const Card = ({ language, projectName, description, image }: CardProps) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={image} alt={projectName} className="w-full h-48 object-cover rounded-md mb-4" />
        <div className="font-bold text-xl text-white">{projectName}</div>
        <div className="text-dark-gray">Language & Frameworks: {language}</div>
        <p className="text-gray-700 text-dark-gray">{description}</p>
      </div>
    );
  };

  
  export default Card;
  