
const Resume = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">My Resume</h1>
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p>Email: your.email@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Education</h2>
      <p>Bachelor of Science in Computer Science</p>
      <p>University Name, Graduation Year</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Experience</h2>
      <p>Job Title - Company Name (Year - Year)</p>
      <p>Brief description of your responsibilities and achievements.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Projects</h2>
      <p>Brief descriptions of notable projects you've worked on.</p>
    </div>
  );
};

export default Resume;