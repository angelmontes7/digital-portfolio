import { useState } from 'react';
import { Mail, Phone, Clock, Send, MapPin, MessageCircle, Github, Linkedin, } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white overflow-hidden relative">
        
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-gray-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start a conversation? I'd love to hear from you. Send me a message and I'll respond as soon as possible!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Send a Message</h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2 text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2 text-lg">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me more about your project or inquiry..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                />
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 ${
                  isSubmitted 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                    : isSubmitting 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                    <span className="text-2xl">✓</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-md bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 group">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-300 text-lg break-all">angelmontes7@yahoo.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-300 text-lg">(630) 822-1871</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 group">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Response Time</h3>
                  <p className="text-gray-300 text-lg">Usually within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 group">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-300 text-lg">Oswego, Illinois</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Follow Me</h3>
              <div className="flex justify-center gap-4">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/angelmontes7"  target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/angelmontes7/"  target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:angelmontes7@yahoo.com"
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center backdrop-blur-md bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, I'm always excited to connect with new people and explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Angel_Montes_Resume.pdf" download className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-center">
                Download Resume
            </a>
            <Link
                to="/"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/20 text-center"
                >
                View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;