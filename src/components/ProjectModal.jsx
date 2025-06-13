import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";




export default function ProjectModal({ project, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const allSlides = [project.video, ...(project.images || [])];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % allSlides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + allSlides.length) % allSlides.length);
  };

  const isVideo = slideIndex === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl text-white relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-2xl font-bold">✕</button>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

        <div className="relative w-full">
          {/* CONTENIDO: video o imagen */}
          {isVideo ? (
            <video
              src={allSlides[slideIndex]}
              controls
              className="rounded-md w-full"
            />
          ) : (
            <img
              src={allSlides[slideIndex]}
              alt={`slide ${slideIndex}`}
              className="rounded-md w-full"
            />
          )}

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm 
             p-2 rounded-full hover:scale-110 transition z-10"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm 
             p-2 rounded-full hover:scale-110 transition z-10"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>


        <p className="mt-6 whitespace-pre-line text-gray-200 leading-relaxed text-sm">
          {project.description}
        </p>


        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Ver en GitHub
          </a>
        )}
      </div>
    </div>
  );
}
