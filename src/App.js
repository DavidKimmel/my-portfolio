import React, { useState } from 'react';
import { X, Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data - you'll replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "Fairfax Vulnerability Assessment",
      description: "Spatial analysis of climate vulnerability in Fairfax County",
      thumbnail: "https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Fairfax+Vulnerability",
      projectUrl: "fairfax.html",
      category: "Vulnerability Analysis"
    },
    {
      id: 2,
      title: "Satellite Mass Analysis",
      description: "Interactive visualization of satellite launch data and mass trends",
      thumbnail: "https://via.placeholder.com/400x300/2c4a6b/ffffff?text=Satellite+Mass",
      projectUrl: "sat.html",
      category: "Data Visualization"
    },
    {
      id: 3,
      title: "Haiti Landcover Change",
      description: "Temporal analysis of deforestation using remote sensing",
      thumbnail: "https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Landcover+Change",
      projectUrl: "hati.html",
      category: "Remote Sensing"
    },
    {
      id: 4,
      title: "Chesapeake Bay Eutrophication",
      description: "Water quality analysis and nutrient loading assessment",
      thumbnail: "https://via.placeholder.com/400x300/2c4a6b/ffffff?text=Chesapeake+Bay",
      projectUrl: "bay.html",
      category: "Environmental Analysis"
    },
    {
      id: 5,
      title: "WV Flying Squirrel Habitat",
      description: "Species habitat suitability modeling using MaxEnt",
      thumbnail: "https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Habitat+Model",
      projectUrl: null,
      staticImage: "https://via.placeholder.com/1200x800/1e3a5f/ffffff?text=Full+Map",
      category: "Habitat Modeling"
    },
    {
      id: 6,
      title: "Carroll County Broadband",
      description: "Infrastructure gap analysis and service coverage mapping",
      thumbnail: "https://via.placeholder.com/400x300/2c4a6b/ffffff?text=Broadband+Coverage",
      projectUrl: null,
      staticImage: "https://via.placeholder.com/1200x800/2c4a6b/ffffff?text=Full+Map",
      category: "Infrastructure Analysis"
    }
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative w-full max-w-6xl bg-slate-800 rounded-lg shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-slate-300 z-10 bg-slate-900 rounded-full p-2"
          >
            <X size={24} />
          </button>
          
          <div className="p-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-slate-300 mb-4">{project.description}</p>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm mb-4">
              {project.category}
            </span>
            
            {project.projectUrl ? (
              <div className="mt-4">
                <iframe
                  src={project.projectUrl}
                  className="w-full h-[600px] rounded border-2 border-slate-600"
                  title={project.title}
                />
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={18} />
                  Open in new tab
                </a>
              </div>
            ) : project.staticImage ? (
              <div className="mt-4">
                <img
                  src={project.staticImage}
                  alt={project.title}
                  className="w-full rounded border-2 border-slate-600"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  const HomePage = () => (
    <div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">David A. Kimmel</h1>
          <p className="text-xl text-slate-300">Cartography & GIS Development</p>
          <p className="text-lg text-slate-400 mt-2">Leveraging Geospatial Analysis and Remote Sensing for Strategic Intelligence Solutions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src="https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Your+Photo"
                alt="David Kimmel"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">David A. Kimmel</h2>
              <p className="text-slate-700 mb-4">
                I'm a geospatial professional completing my Master's in Cartography and GIS Development, 
                with a passion for transforming complex spatial data into actionable intelligence.
              </p>
              <p className="text-slate-700 mb-4">
                My expertise spans advanced cartographic design, remote sensing analysis, and geospatial 
                application development. I specialize in creating interactive web maps and spatial analysis 
                tools that support decision-making in defense, environmental monitoring, and infrastructure planning.
              </p>
              <p className="text-slate-700 mb-4">
                With experience in Python, JavaScript, ArcGIS, QGIS, and modern web mapping libraries, 
                I bridge the gap between technical GIS analysis and user-friendly visualization.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cartography', 'Remote Sensing', 'Spatial Analysis', 'Web Mapping', 'Python', 'JavaScript', 'ArcGIS', 'QGIS'].map(skill => (
                    <span key={skill} className="bg-slate-200 text-slate-700 px-3 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ResumePage = () => (
    <div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Resume</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">David A. Kimmel</h2>
            <p className="text-slate-600">M.S. Cartography & GIS Development (Expected 2025)</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">Education</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800">Master of Science - Cartography & GIS Development</h4>
              <p className="text-slate-600">University Name | Expected 2025</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">Bachelor of Science - Geography</h4>
              <p className="text-slate-600">University Name | Year</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">GIS Software</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• ArcGIS Pro / Desktop</li>
                  <li>• QGIS</li>
                  <li>• Google Earth Engine</li>
                  <li>• ENVI / ERDAS Imagine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Programming</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Python (ArcPy, GeoPandas)</li>
                  <li>• JavaScript (Leaflet, Mapbox)</li>
                  <li>• R (Spatial Analysis)</li>
                  <li>• SQL / PostGIS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-800">GIS Analyst / Position Title</h4>
                <p className="text-slate-600 mb-2">Company Name | Dates</p>
                <ul className="text-slate-600 space-y-1">
                  <li>• Developed interactive web mapping applications for data visualization</li>
                  <li>• Conducted spatial analysis for infrastructure planning projects</li>
                  <li>• Created cartographic products for stakeholder presentations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="bg-slate-800 text-white py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <a
            href="mailto:kimmel.david@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
            <span>kimmel.david@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kimmel-david/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/DavidKimmel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-xl font-bold hover:text-blue-400 transition-colors"
            >
              David Kimmel
            </button>
            <div className="flex gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`hover:text-blue-400 transition-colors ${currentPage === 'home' ? 'text-blue-400' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`hover:text-blue-400 transition-colors ${currentPage === 'about' ? 'text-blue-400' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('resume')}
                className={`hover:text-blue-400 transition-colors ${currentPage === 'resume' ? 'text-blue-400' : ''}`}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'resume' && <ResumePage />}
      </main>

      <ContactSection />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;