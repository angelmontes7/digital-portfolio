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
        <div className="text-sm text-gray-500">{language}</div>
        <div className="font-bold text-xl">{projectName}</div>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default Card;
  