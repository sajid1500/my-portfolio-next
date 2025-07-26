// src/components/ProjectCard.tsx

import Image from "next/image";

// Define the interface for a Project
// Ensure these properties match what's in your projectsData array
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; // Optional, as some projects might not have an image
  techStack: string[];
  liveLink?: string; // Optional
  repoLink?: string; // Optional
}

// Now, explicitly type the 'project' prop
const ProjectCard = ({ project }: { project: Project }) => {
  // <--- CHANGE HERE
                                                                                                                                                                                                                                                            
  return (
    <div className="border rounded-lg shadow-lg p-4 mb-6 bg-gray-100">
      {/* ... rest of your component code ... */}
      {project.image && (
        <div className="relative w-full h-48 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill // Still showing legacy props in screenshot. Remember to update this!
            className="object-cover rounded-md "
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
