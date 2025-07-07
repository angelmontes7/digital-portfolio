
import { GraduationCap, Briefcase, Code, Award, ChevronRight } from 'lucide-react';

const Resume = () => {

  const skills = [
    'Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'React Native',
    'Node.js', 'Express.js', 'HTML', 'CSS', 'PostgreSQL', 'MySQL',
    'MongoDB', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-Learn', 'Power BI'
  ];

  const projects = [
    {
      name: "OpenPlay",
      description: "Mobile app for reserving sports facilities and placing wagers",
      tech: "React Native, Expo",
      features: ["Integrated Stripe, Clerk (Google OAuth), Socket.io, and Neon PostgreSQL", "Real-time chat rooms, secure payments, and personalized dashboards"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "UK Road Accident Dashboard",
      description: "Built Power BI dashboard analyzing 2021–2022 UK road accident data",
      tech: "Power BI, DAX",
      features: ["Implemented data cleaning, DAX measures, and geospatial/time-based visuals"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Insightify",
      description: "Created responsive website with auth, newsletter, and Chrome extensions",
      tech: "Web Technologies",
      features: ["Full-stack web application with modern authentication"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "KwonKasino",
      description: "Designed relational SQL database for casino operations",
      tech: "SQL, Java",
      features: ["Real-time Java integration and complex database operations"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white overflow-hidden">
      
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
            }}
          />
        ))}
      </div>

      {/* Skills Ticker */}
      <section className="relative py-5 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Title */}
        <div className="relative mb-8 text-center">
          <h2 className="text-4xl font-bold text-white tracking-wide">Skills</h2>
          <p className="text-gray-400 mt-2">Technologies and tools I’ve worked with</p>
        </div>

        {/* Ticker scrolling */}
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="mx-8 backdrop-blur-sm bg-blue-500/10 rounded-full px-6 py-3 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-5">
        
        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-10 h-10 text-purple-400" />
            <h2 className="text-5xl font-bold text-white">Education</h2>
          </div>
          
          <div className="backdrop-blur-md bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">North Central College</h3>
                <p className="text-gray-300 text-lg mb-2">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400">May 2025</p>
              </div>
              <div className="text-right">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                  GPA: 3.66
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-10 h-10 text-blue-400" />
            <h2 className="text-5xl font-bold text-white">Work Experience</h2>
          </div>
          
          <div className="backdrop-blur-md bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Lead Retail Sales Consultant</h3>
                <p className="text-blue-400 text-lg font-medium">Comcast</p>
              </div>
              <div className="text-right text-gray-300">
                <p>Naperville, Illinois</p>
                <p>Oct 2022 – Mar 2025</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                "Ranked #1 Sales Consultant in the company (2023) and #3 in Greater Chicago Region (2024).",
                "Achieved conversion rates of 200%–400% using consultative, data-informed strategies.",
                "Troubleshot network issues, improving customer satisfaction and retention.",
                "Collaborated on sales analysis and customer feedback to optimize strategy."
              ].map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 transform group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <Code className="w-10 h-10 text-green-400" />
            <h2 className="text-5xl font-bold text-white">Technical Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-blue-500/10 rounded-2xl p-6 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-full mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="bg-white/20 px-2 py-1 rounded">{project.tech}</span>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-10 h-10 text-yellow-400" />
            <h2 className="text-5xl font-bold text-white">Certifications</h2>
          </div>
          
          <div className="backdrop-blur-md bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-white">IBM Data Analysis with Python Certificate</h3>
                <p className="text-gray-400">March 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Makes the ticker scroll */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Resume;