export default function ProjectCard({ title, image, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          En savoir plus
        </button>
      </div>
    </div>
  );
}
