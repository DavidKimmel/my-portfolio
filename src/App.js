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
      thumbnail: `${process.env.PUBLIC_URL}/assets/thumbnails/fairfax-thumb.jpg`,
      projectUrl: "fairfax.html",
      category: "Vulnerability Analysis"
    },
    {
      id: 2,
      title: "Satellite Mass Analysis",
      description: "Interactive visualization of satellite launch data and mass trends",
      thumbnail: `${process.env.PUBLIC_URL}/assets/thumbnails/satellite-thumb.jpg`,
      projectUrl: "sat.html",
      category: "Data Visualization"
    },
    {
      id: 3,
      title: "Haiti Landcover Change",
      description: "Temporal analysis of deforestation using remote sensing",
      thumbnail: `${process.env.PUBLIC_URL}/assets/thumbnails/haiti-thumb.jpg`,
      projectUrl: "hati.html",
      category: "Remote Sensing"
    },
    {
      id: 4,
      title: "Chesapeake Bay Eutrophication",
      description: "Water quality analysis and nutrient loading assessment",
      thumbnail: `${process.env.PUBLIC_URL}/assets/thumbnails/bay-thumb.jpg`,
      projectUrl: "bay.html",
      category: "Environmental Analysis"
    },
    {
      id: 5,
      title: "WV Flying Squirrel Habitat",
      description: "Species habitat suitability modeling using MaxEnt",
      thumbnail: `${process.env.PUBLIC_URL}/assets/thumbnails/squirrel-thumb.jpg`,
      projectUrl: null,
      staticImage: `${process.env.PUBLIC_URL}/assets/images/squirrel-full.jpg`,
      category: "Habitat Modeling"
    },
    {
      id: 6,
      title: "Carroll County Broadband",
      description: "Infrastructure gap analysis and service coverage mapping",
      thumbnail: `${process.env.PUBLIC_URL}/assets/thumbnails/broadband-thumb.jpg`,
      projectUrl: null,
      staticImage: `${process.env.PUBLIC_URL}/assets/images/broadband-full.jpg`,
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
      <div 
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 mb-12 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/gis.png)`,
          backgroundColor: 'rgba(15, 23, 42, 0.5)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">David A. Kimmel | Image Scientist</h1>
          <p className="text-xl text-slate-300">Cartography & GIS Development</p>
          <p className="text-lg text-slate-400 mt-2">Leveraging GIS, Remote Sensing, and Statistical Analysis for Insightful Spatial Solutions</p>
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
                src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
                alt="David Kimmel"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">David A. Kimmel</h2>
              <p className="text-slate-600 mb-1">GIS Developer & Cartographer</p>
              <p className="text-slate-600 mb-4">Active TS/SCI with CI Polygraph</p>
              
              <p className="text-slate-700 mb-4">
                I'm a full-stack geospatial professional with a Master of Science in GIS Development and 
                Cartography from the University of Wisconsin and over 5 years of experience developing 
                spatial tools, automating remote sensing workflows, and designing interactive maps for 
                national defense and intelligence operations.
              </p>
              <p className="text-slate-700 mb-4">
                Currently serving as a GIS Developer and Image Scientist at Boeing, I specialize in processing 
                and analyzing Synthetic Aperture Radar (SAR) data, building automated geospatial pipelines, 
                and developing data-driven insights for government clients. My background spans cartographic 
                production at Leidos and geospatial intelligence analysis at the National Geospatial-Intelligence 
                Agency (NGA).
              </p>
              <p className="text-slate-700 mb-4">
                I bridge the gap between technical geospatial analysis and user-friendly visualization, with 
                expertise in Python, JavaScript, and open-source geospatial libraries. My work focuses on 
                transforming complex spatial data into actionable intelligence products that support strategic 
                defense planning and operational decision-making.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Technical Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React', 'SAR Analysis', 'ArcGIS Pro', 'QGIS', 'Google Earth Engine', 'PostGIS', 'GDAL/OGR', 'Remote Sensing', 'Cartography', 'Web Mapping'].map(skill => (
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
            <p className="text-slate-600 mb-1">GIS Developer & Cartographer</p>
            <p className="text-slate-600 mb-1">Active TS/SCI with CI Polygraph</p>
            <p className="text-slate-600">Fairfax, VA | (443) 536-6606 | Kimmel.David@gmail.com</p>
          </div>

          <div className="mb-8">
            <p className="text-slate-700">
              Full-stack geospatial professional with a master's in GIS & Cartography and 5+ years of 
              experience developing spatial tools, automating remote sensing workflows, and designing 
              interactive maps. Skilled in Python, JavaScript, and open-source geospatial libraries. 
              Background in imagery science and cartographic production for national defense.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">GEOINT Tools</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Socet GXP</li>
                  <li>• ArcPro/ESRI suite</li>
                  <li>• RemoteView</li>
                  <li>• ENVI</li>
                  <li>• QT Modeler</li>
                  <li>• Google Earth Engine</li>
                  <li>• GDAL/OGR</li>
                  <li>• QGIS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Developer Tools</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• AWS</li>
                  <li>• Visual Studio Code</li>
                  <li>• Android Studio</li>
                  <li>• Jupyter Notebook</li>
                  <li>• PostGIS</li>
                  <li>• IntelliJ IDEA</li>
                  <li>• MATLAB</li>
                  <li>• GitHub</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Programming</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Python</li>
                  <li>• JavaScript</li>
                  <li>• C++</li>
                  <li>• Java/Vue/React</li>
                  <li>• Kotlin</li>
                  <li>• SQL</li>
                  <li>• MATLAB</li>
                  <li>• HTML/CSS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">Professional Experience</h3>
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-800">GIS Developer / Image Scientist</h4>
                    <p className="text-slate-600">Boeing, Springfield VA</p>
                  </div>
                  <p className="text-slate-600 text-sm">Sept 2023 - Present</p>
                </div>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Develop and implement geospatial workflows to process large volumes of remote sensing and Synthetic Aperture Radar (SAR) data</li>
                  <li>• Apply geospatial and image processing algorithms to extract actionable features for integration into GIS platforms</li>
                  <li>• Build automated data pipelines for sensor quality assessment using Python and specialized geospatial libraries</li>
                  <li>• Conduct advanced geospatial analysis on radar cross sections, impulse response, and signal-to-noise ratio metrics</li>
                  <li>• Research and recommend improvements to geospatial data collection, storage, and exploitation methods</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-800">Cartographer</h4>
                    <p className="text-slate-600">Leidos, Springfield VA</p>
                  </div>
                  <p className="text-slate-600 text-sm">Sept 2022 - Sept 2023</p>
                </div>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Developed high-accuracy maritime charts ensuring compliance with national and international standards</li>
                  <li>• Conducted data collection and analysis using GIS software, satellite imagery, and hydrographic survey data</li>
                  <li>• Collaborated with multidisciplinary teams to create detailed maps integrating environmental data and operational zones</li>
                  <li>• Utilized advanced cartographic techniques to visualize complex maritime data for strategic defense planning</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-800">Geospatial Analyst</h4>
                    <p className="text-slate-600">National Geospatial-Intelligence Agency (NGA), Springfield VA</p>
                  </div>
                  <p className="text-slate-600 text-sm">May 2022 - Sept 2022</p>
                </div>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Analyzed and interpreted geospatial data from satellite imagery, aerial photography, and LiDAR</li>
                  <li>• Conducted spatial analysis and modeling to identify patterns, trends, and anomalies for threat assessment</li>
                  <li>• Created geospatial databases using SQL and Python, delivering data-driven insights for analysis</li>
                  <li>• Improved data visualization by providing repeatable Python code examples for the intelligence community</li>
                  <li>• Authored and published finished intelligence products to the greater Intelligence Community</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">Education & Certifications</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-slate-800">Master of Science in GIS Development and Cartography</h4>
                <p className="text-slate-600">University of Wisconsin</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Bachelor of Science in Geography & Geospatial Science</h4>
                <p className="text-slate-600">Oregon State University</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Associates of Science in Geographic Information Systems</h4>
                <p className="text-slate-600">Northern Virginia Community College</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">GEOINT Professional Certification: GPC-F</h4>
                <p className="text-slate-600">United States Department of Defense</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/assets/David_Kimmel_Resume_2025.pdf"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
              download
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