//Create a folder src/app/projects, then inside it, create page.tsx.

//TypeScript
// src/app/projects/page.tsx
import ProjectCard from '../../components/ProjectCard'; // Adjust path if components folder is elsewhere

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
    image: '/images/project1.jpg',
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://example.com/ecommerce',
    repoLink: 'https://github.com/yourusername/ecommerce-repo',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A sleek and intuitive task management application with drag-and-drop functionality and real-time updates.',
    image: '/images/project2.jpg',
    techStack: ['React', 'Firebase', 'Redux', 'Styled Components'],
    liveLink: 'https://example.com/task-app',
    repoLink: 'https://github.com/yourusername/task-app-repo',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A static blog generated with Markdown, featuring responsive design and SEO optimization.',
    image: '/images/project3.jpg',
    techStack: ['Next.js', 'Markdown', 'Tailwind CSS'],
    liveLink: 'https://example.com/blog',
    repoLink: 'https://github.com/yourusername/blog-repo',
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

// Optional: Page-specific metadata
export const metadata = {
  title: 'My Projects - Your Name',
  description: 'Explore my portfolio of web development projects, built with modern technologies.',
};