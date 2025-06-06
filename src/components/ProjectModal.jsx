export default function ProjectModal({ project, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
          <button onClick={onClose} className="text-black float-right">✖</button>
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4 text-gray-700">{project.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`Imagen de ${project.title}`} className="rounded-md" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  