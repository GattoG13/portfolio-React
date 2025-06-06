import React, { useState } from 'react';

const projectData = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
  { id: 5, title: "Project 5" },
  { id: 6, title: "Project 6" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    alert(`Clicked on ${project.title}`);
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl justify-center px-4">
        {projectData.map((project) => (
          <div
            key={project.id}
            onClick={() => handleClick(project)}
            className="bg-gray-800 text-white p-4 rounded-lg transform transition-transform duration-300 cursor-pointer hover:scale-105 hover:bg-gray-700"
          >
            {project.title}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-black">
            <h3 className="text-xl mb-2">{selectedProject.title}</h3>
            <p>Description of {selectedProject.title} goes here.</p>
            <button 
              onClick={() => setSelectedProject(null)} 
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
