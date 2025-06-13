import React, { useState } from 'react';
import ProjectModal from './ProjectModal';


const projectData = [
  {
    id: 1,
    title: "Stephen King FanPage",
    description: `
📘 Stephen King FanPage

Sitio web estático creado como práctica de maquetado. Simula una tienda visual de libros del autor, con diseño responsive y navegación básica.

✨ Características:
• 🖼️ Galería visual de libros destacados
• 🧩 HTML semántico con estructura clara
• 🎨 Estilos custom con CSS y Bootstrap 4
• 🧭 Navegación tipo e-commerce simulada

🛠️ Tecnologías utilizadas:
HTML5 · CSS3 · Bootstrap 4 · jQuery
`,
    video: "/imgs/project1/vid1.mp4",
    images: [
      "/imgs/project1/img1.jpg",
      "/imgs/project1/img2.jpg",
      "/imgs/project1/img3.jpg",
      "/imgs/project1/img4.jpg"
    ],
    thumbnail: "/imgs/project1/img1.jpg",
    preview: "Galería interactiva y diseño responsive.",
    github: "https://github.com/GattoG13/Stephen-King-FanPage"
  },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
  { id: 5, title: "Project 5" },
  { id: 6, title: "Project 6" }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
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
className="group relative w-full h-40 bg-gray-800 text-white rounded-xl overflow-hidden cursor-pointer
             transition duration-300 hover:scale-[1.04] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
>
            {/* Imagen de fondo */}
            <img
              src={project.thumbnail}
              alt={project.title}
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-300"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition duration-300"></div>

            {/* Texto */}
            <div className="relative z-10 flex flex-col justify-end h-full p-4">
              <h3 className="text-lg text-white group-hover:text-gray-900 transition">{project.title}</h3>
              <p  className="text-sm text-white group-hover:text-gray-800 transition">{project.preview || "Preview del proyecto..."}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
